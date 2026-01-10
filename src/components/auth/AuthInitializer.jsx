import React from "react";
import { useAuth } from "@contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { GET_AUTH_USER, GET_MY_CART } from "@utils/api";
import { useCart } from "@contexts/CartContext";

function AuthInitializer({ children }) {

    const { jwt, setUser, setIsLoading: setAuthIsLoading } = useAuth();
    const { setCart, setIsLoading: setCartIsLoading } = useCart();
    const { data: authData, isLoading } = useQuery({
        queryKey: ["AUTH"],
        queryFn: () => GET_AUTH_USER(jwt),
        refetchOnWindowFocus: false,
        enabled: !!jwt
    });
    React.useEffect(() => {

        if (!authData) return;

        if (authData?.error?.status === 401) {
            localStorage.removeItem('jwt');
            location.reload()
            return;
        }

        setUser(authData);
        setAuthIsLoading(false);

    }, [authData, setAuthIsLoading, setUser]);

    const { data: cartData } = useQuery({
        queryKey: ["CART"],
        queryFn: () => GET_MY_CART(jwt),
        refetchOnWindowFocus: false,
        enabled: Boolean(!!jwt && authData && !isLoading)
    });
    React.useEffect(() => {
        if (cartData) {
            setCart(cartData);
            setCartIsLoading(false);
        }
    }, [cartData, setCart, setCartIsLoading]);

    return children;
}

export default AuthInitializer;
import React from "react";
import { useAuth } from "@contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { GET_AUTH_USER, GET_MY_CART } from "@utils/api";
import { useCart } from "@contexts/CartContext";

function AuthInitializer({ children }) {

    const { jwt, setUser, setIsLoading: setAuthIsLoading } = useAuth();
    // eslint-disable-next-line no-unused-vars
    const { setCart, setIsLoading: setCartIsLoading } = useCart();

    // eslint-disable-next-line no-unused-vars
    const { data: authData, isSuccess: isAuthSuccess } = useQuery({
        queryKey: ["AUTH"],
        queryFn: () => GET_AUTH_USER(jwt),
        refetchOnWindowFocus: false,
        enabled: !!jwt
    });
    // const { data: cartData } = useQuery({
    //     queryKey: ["CART"],
    //     queryFn: () => GET_MY_CART(jwt),
    //     refetchOnWindowFocus: false,
    //     enabled: Boolean(!!jwt && isAuthSuccess)
    // });

    React.useEffect(() => {
        if (authData) {
            setUser(authData);
            setAuthIsLoading(false);
        }
    }, [authData, setUser, setAuthIsLoading]);
    // React.useEffect(() => {
    //     if (cartData) {
    //         setCart(cartData);
    //         setCartIsLoading(false);
    //     }
    // }, [cartData, setCart, setCartIsLoading]);

    return children;
}

export default AuthInitializer;
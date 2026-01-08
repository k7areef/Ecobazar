import React from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const jwtStored = localStorage.getItem("jwt");
    const [jwt, setJwt] = React.useState(jwtStored || false);
    const [user, setUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(jwtStored ? true : false);

    return (
        <AuthContext.Provider
            value={{
                jwt, setJwt,
                user, setUser,
                isLoading, setIsLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(AuthContext);
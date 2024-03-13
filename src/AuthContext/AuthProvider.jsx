import { useState, createContext } from "react";

export const AuthContent = createContext();

export default function AuthProvider({ children }) {
    const [Auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);

    const AuthTheme = {
        Auth, setAuth, token, setToken
    }

    return (
        <AuthContent.Provider value={{ AuthTheme }}>
            {children}
        </AuthContent.Provider>
    )
}

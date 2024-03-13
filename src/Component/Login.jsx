import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../Component/WatchModule.css';
import { AuthContent } from "../AuthContext/AuthProvider";
import { useContext } from "react";

export default function Login() {
    const { AuthTheme } = useContext(AuthContent);

    const handleLoginSuccess = credentialResponse => {
        console.log(credentialResponse);
        AuthTheme.setAuth(true); 
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

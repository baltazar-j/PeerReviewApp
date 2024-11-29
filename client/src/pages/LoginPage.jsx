import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const navigate = useNavigate();

    // Redirect to home if already authenticated
    if (isAuthenticated) {
        navigate("/home");
    }

    return (
        <div>
            <h2>Welcome! Please log in or sign up to continue.</h2>

            {!isAuthenticated ? (
                <button className="login-button" onClick={() => loginWithRedirect()}>
                    Login/Signup
                </button>
            ) : (
                <div>
                    <p>Welcome, {user?.name}</p>
                    <button onClick={() => logout()}>Log Out</button>
                </div>
            )}

            <style>{`
                :root {
                    --text-color: #e6e6e6;
                    --background-color: #141414;
                    --dark-grey-accent: #393939;
                    --button-color: #00008B;
                    --button-hover-color: #003366;
                }

                .login-button {
                    padding: 0.75rem;
                    background-color: var(--button-color);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: background-color 0.3s;
                }

                .login-button:hover {
                    background-color: var(--button-hover-color);
                }

                .login-button[type="button"] {
                    background-color: #8B0000;
                }
            `}</style>
        </div>
    );
};

export default LoginPage;

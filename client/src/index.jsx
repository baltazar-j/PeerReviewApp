import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="YOUR_AUTH0_DOMAIN" // Replace with your Auth0 domain
        clientId="YOUR_AUTH0_CLIENT_ID" // Replace with your Auth0 client ID
        authorizationParams={{
            redirect_uri: window.location.origin, // Redirect to your app after login
        }}
    >
        <App />
    </Auth0Provider>
);

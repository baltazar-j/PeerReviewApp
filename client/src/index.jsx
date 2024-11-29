import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-uo02mxfmeuku4p24.us.auth0.com"
        clientId="49lGcA9GxZLP5rwGWmAvB8AI81aKNGii"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>
);

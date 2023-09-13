import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { PostsContextProvider } from './context/PostsContext';
import { AuthContextProvider } from './context/AuthContext';
import App from './App';
import './styles/index.scss';



const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <AuthContextProvider>
            <PostsContextProvider>
                <Router>
                    <App />
                </Router>
            </PostsContextProvider>
        </AuthContextProvider>
    </StrictMode>
);
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/configStore'
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import GlobalStyled from "./Components/Common/GlobalStyled.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyled />
                <App />
            </BrowserRouter>
        </Provider>
);

import 'react-hot-loader/patch';
import 'babel-polyfill';
import 'typeface-roboto';
import './styles.css';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept(() => {
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}

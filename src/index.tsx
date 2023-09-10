import React from 'react';
import ReactDOM from 'react-dom/client';
import '001_app/styles/index.scss';
import '006_shared/config/i18n/i18n'
import App from '001_app/App';
import {BrowserRouter} from 'react-router-dom';
import {AppThemeProvider} from '001_app/providers/appThemeProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <AppThemeProvider>
            <App />
        </AppThemeProvider>
    </BrowserRouter>
);

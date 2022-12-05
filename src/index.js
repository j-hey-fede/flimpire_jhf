import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Proviider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App';
import store from './app/store';

const theme = createTheme({});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    
    document.getElementById('root'));

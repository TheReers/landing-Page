import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import React from 'react';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  custom: {
    families: ['Gilroy:500,700,400,600,300'],
    urls: [
      'assets/fonts/Gilroy-Regular.otf',
      'assets/fonts/Gilroy-Medium.otf',
      'assets/fonts/Gilroy-Semibold.otf',
      'assets/fonts/Gilroy-Thin.otf',
      'assets/fonts/Gilroy-Bold.otf',
      'assets/fonts/Gilroy-Extrabold.otf',
    ],
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

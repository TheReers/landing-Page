import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import React from 'react';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Poppins', 'Gilroy:500,700,400,600'],
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

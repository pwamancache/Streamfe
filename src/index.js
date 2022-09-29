import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap//dist/js/bootstrap.min.js'
import AppRoutes from './AppRoutes/AppRoutes.js'
import { Chart, registerables } from 'chart.js';
import {store} from './Store/Store.js'
import {Provider} from 'react-redux'
Chart.register(...registerables);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
   <AppRoutes/>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

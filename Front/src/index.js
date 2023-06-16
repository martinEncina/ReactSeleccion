import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Layout from './Routes/Routes';
import { AppContext } from "./Context/Context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
    <Layout />
  </AppContext>
);


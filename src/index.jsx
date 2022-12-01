import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import "./mock";
import { store, persistor } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ConfigProvider locale={zhCN}>
      <App />
      </ConfigProvider>
    </PersistGate>
  </Provider>
);


import React from 'react';
import './App.css'; 
import { HashRouter } from 'react-router-dom';
import Router from './routes/index';
import 'antd/dist/reset.css';

function App() {
  return (
    <HashRouter>
      <Router/>
    </HashRouter>
  );
}

export default App;

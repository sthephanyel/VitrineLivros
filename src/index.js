import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/Home.module.css';
import 'antd/dist/antd.css';
import PlayerContextProvider from './pages/ComponentsUI/comtext/playerContext';


ReactDOM.render(
  <PlayerContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    </PlayerContextProvider>,
    document.getElementById('root')
  
);


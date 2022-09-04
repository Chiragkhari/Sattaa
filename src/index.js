import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './test.png';
import otherLogo from './logo.svg'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VotingCounter from './components/VotingCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App logo={logo} />
    <App logo={otherLogo} />
    <App logo={logo} />
    <App logo={otherLogo} /> */}
    <VotingCounter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

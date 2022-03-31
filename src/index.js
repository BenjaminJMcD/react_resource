import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

//ReactDOM.render() is the React library's function call to display the virturl DOM in a specific place in the index.html's structure.

//It takes 2 parameters;
        //1. What do we want to render? (i.e. App component)
        //2. Where do we want to render it? (i.e. index.html, div#root)
        
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

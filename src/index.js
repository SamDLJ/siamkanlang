import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./features/user";
import themeReducer from "./features/theme";

const store = configureStore({
	reducer: {
		user: userReducer,
		theme: themeReducer,
		
	}
});


ReactDOM.render(
	<Provider store={store}>
    <App style={{ background: "#000000", height: "100%" }}/>
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*

  <React.StrictMode>
    <App />
  </React.StrictMode>,
*/

// siamkanapp

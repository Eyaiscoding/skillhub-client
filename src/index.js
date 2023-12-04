//this file transform react components into HTML and puts it in the div tag with id=app
//the browser only knows HTML and only read index.html
//React dom is the library that sends REACT code to index.html by createroot() method
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css'

//create connection between js and HTML
const root = ReactDOM.createRoot(document.getElementById('app'));

//pass the react components inside HTML using root.render
//enclosing App component in the parent component BrowserRouter so all components in App component respond to routes
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);
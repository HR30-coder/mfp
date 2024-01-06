import React from 'react';
import ReactDom from 'react-dom';
import App from "./app";

const mount = (el) => {
    ReactDom.render(
        <App/>,
        el
    );
}

if (process.env.NODE_ENV === 'development') {
    if (document.querySelector("#isolatedDev")) {
        mount(document.querySelector("#isolatedDev"));
    }
}

export {
    mount
};
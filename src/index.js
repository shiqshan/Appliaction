import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

// store.subscribe(() => {
//     root.render(<App />)
// })

// ReactDom.render(<App/>, document.getElementById('root'))
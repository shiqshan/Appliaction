import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

// store.subscribe(() => {
//     root.render(<App />)
// })

// ReactDom.render(<App/>, document.getElementById('root'))
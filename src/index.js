import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux"
import {store} from "./redux/store";
import Calculator from "./containers/Calculator/Calculator";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Calculator/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


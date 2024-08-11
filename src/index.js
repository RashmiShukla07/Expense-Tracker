import React from "react";
import ReactDOM  from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import Provider from './context/context';
import App from "./App";
import "./index.css";

ReactDOM.render(
    <SpeechProvider appId="0b4b6443-f0a3-44af-953e-319684067e19" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ChatComponent from "./components/chat";
import HomeComponent from "./components/home";
import "./styles/main.css";

const ExampleComponent = () => (
    <p>Example Component</p>
);

render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li><Link to="/example">Example</Link></li>
            </ul>
            <Route exact={true} path="/" component={HomeComponent}/>
            <Route path="/chat" component={ChatComponent}/>
            <Route path="/example" component={ExampleComponent}/>
        </div>
    </BrowserRouter>
    , document.getElementById("root"),
);

import { render } from "react-dom";
import * as React from 'react';
import './styles/main.css';
import { Route, BrowserRouter, Link } from "react-router-dom";
import ChatComponent from "./components/chat";
import HomeComponent from "./components/home";
const ExampleComponent = () => (
    <p>Example Component</p>
);

render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/chat'>Chat</Link></li>
                <li><Link to='/example'>Example</Link></li>
            </ul>
            <Route exact={true} path='/' component={HomeComponent}/>
            <Route path='/chat' component={ChatComponent}/>
            <Route path='/example' component={ExampleComponent} />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);


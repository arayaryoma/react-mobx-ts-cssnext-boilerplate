import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ToDoComponent from "./components/to-do";
import "./styles/main.css";

render(
  <BrowserRouter>
    <div>
      <Route path="/" component={ToDoComponent} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

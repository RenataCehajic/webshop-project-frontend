import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

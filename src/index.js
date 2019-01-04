import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Content from "./Content";

import "./styles.css";

const users = [
  { id: 1, name: "Sam", age: 33 },

  { id: 2, name: "Pete", age: 22 },

  { id: 3, name: "David", age: 44 },

  { id: 4, name: "Ashley", age: 22 },

  { id: 5, name: "Nancy", age: 33 },

  { id: 6, name: "Vivien", age: 44 }
];

function App() {
  return (
    <div>
      <Header headText="This is header which is passed as prop" />
      <Content users={users} />
      <Footer copyright="(C) Tereshchenko Max Homework #3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class Hello extends React.Component {
  getMarkup() {
    const markup = "<p>text here</p>";
    const parser = new DOMParser();
    const el = parser.parseFromString(markup, "text/xml");
    const d = el.documentElement.innerHTML;

    return d;
  }
  render() {
    return (
      <Fragment>
        <div>{this.getMarkup()}</div>
      </Fragment>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Hello />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

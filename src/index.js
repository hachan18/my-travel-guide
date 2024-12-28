import React from "react";
import ReactDOM from "react-dom/client";  // ReactDOM.createRootを使用するために変更
import App from "./App";  // App.jsのインポート
import "./index.css";  // 任意でCSSのインポート

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

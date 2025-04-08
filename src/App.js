import React from "react";
import Todo from "./features/todo/Todo";
import User from "./features/user/User";
import "./App.css"
const App = () => {
  return (
    <div>
      <div className="App-Header"><h1>My Application</h1></div>
      <User />;
      <div className="App-Footer">@Copyright 2025. All rights reserved.</div>
    </div>
  );
};
export default App;

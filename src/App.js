import './App.css';
import Home from "./Components/Home/Home";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
      <div  className="App">
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>
                  <Route path="/post/:id">
                      <PostDetail></PostDetail>
                  </Route>
              </Switch>
          </Router>
      </div>

  );
}

export default App;

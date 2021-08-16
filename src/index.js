import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Auth from "./Auth";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import rootReducer from "./rootReducer";


import "./styles.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  // return (
  //   <div className="App">
  //     <ProductList />
  //   </div>
  // );
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  ); 
}



function About() {
  return <h2>Auth</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

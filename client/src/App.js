import { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense>
            <Route path="/" component={Landingpage} exact />
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

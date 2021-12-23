import React from "react"
import Accueil from './pages/Accueil'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/" component={ErrorPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

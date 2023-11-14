import { Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import NewPlace from "./places/components/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./users/components/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/app" exact>
              <h1>App.js works</h1>
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import HomePage from "./pages/home-page.component";
import DetailsPage from "./pages/details-page.component";
import CardPage from "./pages/card-page.component";
// CSS
import "./app.styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/card:page">
          <CardPage />
        </Route>
        <Route path="/details:page">
          <DetailsPage />
        </Route>
        <Route path="/:page">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

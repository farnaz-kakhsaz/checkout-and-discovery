import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import HomePage from "./pages/home-page.component";
import DetailsPage from "./pages/details-page.component";
import CartPage from "./pages/cart-page.component";
// CSS
import "./app.styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/details">
          <DetailsPage />
        </Route>
        <Route path="/:pageNumberURL">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

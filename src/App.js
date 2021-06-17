import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import ContextProvider from "./context/context-provider";
import HomePage from "./pages/home/home-page.component";
import DetailsPage from "./pages/details/details-page.component";
import CartPage from "./pages/cart/cart-page.component";
// CSS
import "./app.styles.css";

function App() {
  return (
    <Router>
      <ContextProvider>
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
      </ContextProvider>
    </Router>
  );
}

export default App;

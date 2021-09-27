import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

const HatsPage = () => <h1>Hats Page</h1>;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Card from "./pages/Card";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact={ true } component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Card} />
      <Route path="/counter" component={Counter} />
    </Switch>
  );
}

export default App;

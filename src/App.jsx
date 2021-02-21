import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact={ true } component={ Home} />
      <Route path="/about" component={ About} />
    </Switch>
  );
}

export default App;

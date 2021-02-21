import { Route, Switch } from "react-router-dom"
import Login from "./pages/login/Login"

const routes = (
    <Switch>
        <Route path="/" exact={true} component={ Login} />
        <Route path="/login" component={ Login} />
    </Switch>
)

export default routes
import Home from "./home/Home";

import {
    Switch,
    Route,
} from "react-router-dom";

export const PublicLayout = (props) => <div>
    <Switch>
        <Route exact path="/public">
            <Home />
        </Route>
    </Switch>
</div>

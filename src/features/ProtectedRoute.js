import {Counter} from "./counter/Counter";
import NotFound from "../components/NotFoundPage/404-page";
// import Header from "../components/Header";
import Footer from "../components/Footer";

import {
    Switch,
    Route,
} from "react-router-dom";

export const ProtectedLayout = (props) => <div>
    {/* <Header /> */}
    <hr />
    <Switch>
        <Route path={'/dashboard'} component={Counter}/>
    </Switch>
    <Footer />
</div>
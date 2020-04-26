import { Switch, Route } from 'react-router'
import React from "react";
import {Home} from "../components/Home";
import {Login} from "../components/Login";
import {Registration} from "../components/Registration";
import {Board} from "../components/Board";
import {Card} from "../components/Card";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/board" component={Board} />
        <Route path="/cards" component={Card} />
    </Switch>
)

export default Routes

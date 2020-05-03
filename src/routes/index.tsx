import {Switch, Route} from 'react-router-dom'
import React from "react";
import {Login} from "../components/Login";
import {Registration} from "../components/Registration";
import {Board} from "../components/Board";
import {Card} from "../components/Card";
import Boards from "../components/Boards";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Boards}/>
        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
        <Route exact path="/boards" component={Boards}/>
        <Route path="/b/:id_board/:name_board" component={Board}/>
        <Route path="/c/:id_card/:name_card" component={Card}/>
    </Switch>
)

export default Routes

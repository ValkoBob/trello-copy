import {Switch, Route} from 'react-router-dom'
import React from "react";
import {Login} from "../components/Login";
import {Registration} from "../components/Registration";
import Board from "../components/Board";
import Boards from "../components/Boards";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Boards}/>
        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
        <Route exact path="/boards" component={Boards}/>
        <Route path="/b/:id_board/:name_board" component={Board}/>
    </Switch>
)

export default Routes

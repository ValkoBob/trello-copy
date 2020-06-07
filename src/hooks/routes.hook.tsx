import React from "react";
import {Route, Switch} from "react-router-dom";
import {UserHome} from "../components/UserHome";
import Boards from "../components/Boards";
import Board from "../components/Board";
import {Home} from "../components/Home";
import Login from "../components/Login";
import {Registration} from "../components/Registration";
import {Redirect} from "react-router";
import PopOverCard from "../components/PopOverComponents/PopOverCard";

export const useRoutes = (isAuthenticated: any) => {
  if (isAuthenticated) {
    return (
        <Switch>
          <UserHome>
            <Route exact path="/boards" component={Boards}/>
            <Route exact path="/b/:id_board/:name_board" component={Board}/>
            <Route exact path="/c/:id_card/:name_card" component={PopOverCard}/>
            <Redirect to="/boards"/>
          </UserHome>
        </Switch>
    )
  }
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Registration}/>
        <Redirect to="/"/>
      </Switch>
  )
}

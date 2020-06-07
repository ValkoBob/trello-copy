import React from "react";
import {NavBar} from "../NavBar";

export const UserHome = (props: any) => {
  return (
      <div className="app-container">
        <NavBar/>
        {props.children}
      </div>
  )
}

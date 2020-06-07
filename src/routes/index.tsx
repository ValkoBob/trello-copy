import React, {useEffect} from "react";
import {Spinner} from "../components/MultipleComponents/Spinner";
import {connect} from "react-redux";
import * as actions from "../redux/actions/index";
import {useAuth} from "../hooks/auth.hook";
import {useRoutes} from "../hooks/routes.hook"
import {AuthContext} from '../context/AuthContext'


const Routes = (props: any) => {
  const {token, login, logout} = useAuth()
  const {isAuthenticated, loading} = props;
  const routes = useRoutes(isAuthenticated)
  useEffect(()=> {
    if(token) {
      props.userInLocal(token)
    }
  }, [token])
  if (loading) {
    return <Spinner/>
  }
  return (
      <AuthContext.Provider value={{
        // @ts-ignore
        token, login, logout
      }}>
        {routes}
      </AuthContext.Provider>)
}

const mapStateToProps = (state: any) => {
  const {isAuthenticated} = state.users
  const {loading} = state.dataRequest
  return {isAuthenticated, loading}
}

export default connect(mapStateToProps, actions)(Routes)

import React, {useContext, useState} from 'react';
import './style/Login.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {useHistory} from "react-router";
import {AuthContext} from "../../context/AuthContext";

const Login = (props: any) => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHandler = (event: any) => {
    setForm({...form, [event.target.name]: event.target.value})
  }
  const loginHandler = async () => {
    const result = await props.loginUser(form.email, form.password)
    if(result){
      console.log(result)
      auth.login(result.token)
      history.push(`/boards`)
    }
  }

  return (
      <div className="login">
        <div className="login-header">Trello</div>
        <section className="login-form">
          <h1>Увійти в Трелло</h1>
          <div className="login-form-container">
            <input
                type="text"
                name="email"
                className="login-form-email"
                autoCapitalize="off"
                placeholder="Укажіть адресу електронної пошти"
                value={form.email}
                onChange={changeHandler}
            />
            <input
                type="password"
                name="password"
                className="login-form-password"
                placeholder="Уведіть пароль"
                value={form.password}
                onChange={changeHandler}
            />
            <input
                type="submit"
                className="login-form-submit"
                value="Увійти"
                onClick={loginHandler}
            />
            <hr/>
            <ul className="login-form-link">
              <li>
                <Link to="/login" style={{textDecoration: 'none'}}>
                  Не можете увійти?
                </Link>
              </li>
              <span>.</span>
              <li>
                <Link to="/signup" style={{textDecoration: 'none'}}>
                  Зареєструвати аккаунт
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
  )
}

export default connect(null, actions)(Login)

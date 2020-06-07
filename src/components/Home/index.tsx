import React from 'react';
import {Link} from "react-router-dom";
import './style/Home.scss'

export const Home = () => {
    return (
        <div className="home-header">
          <nav className="home-header-navigation">
            <span className="home-header-navigation__title">Trello</span>
            <div className="home-header-navigation-buttons">
              <Link to="/login" style={{textDecoration: 'none'}}>
                <button className="home-header-navigation-buttons__login">
                  Увійти
                </button>
              </Link>
              <Link to="/signup" style={{textDecoration: 'none'}}>
                <button className="home-header-navigation-buttons__signup">
                  Зареєструватися
                </button>
              </Link>
            </div>
          </nav>
        </div>
    )
}

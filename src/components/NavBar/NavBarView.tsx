import React from 'react';
import './../NavBar/style/NavBar.scss';
import {Link} from "react-router-dom";

export const NavBarView = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <a aria-label="Повернутися на домашню сторінку" href="/" className="header-nav-home">
                    <span color="light" className="header-nav-home__icon icon-home">
                    </span>
                    </a>
                </Link>
                <Link to="/boards" style={{textDecoration: 'none'}}>
                    <button className="header-nav-button">
                    <span className="header-nav-button__board icon-trello">
                    </span>
                        <span className="header-nav-button__title">
                        Дошки
                    </span>
                    </button>
                </Link>
            </div>
            <a href="/" className="header-logo">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="header-logo-container">
                    <span className="header-logo-container__icon1">
                    </span>
                        <span className="header-logo-container__icon2">
                    </span>
                    </div>
                    <div className="header-logo-title">
                    </div>
                </Link>
            </a>
            <div className="header-userbar">
                <button className="header-userbar-newboard">
                    <span className="header-userbar-newboard__add icon-plus">
                    </span>
                </button>
                <button className="header-userbar-user">
                    <div className="header-userbar-user__content" title="user_name">
                        <span className="header-userbar-user__avatar"
                              style={{
                                  height: "32px",
                                  width: "32px",
                                  lineHeight: "32px",
                                  backgroundImage: 'url("https://trello-members.s3.amazonaws.com/5c81359f7788f4739c326dae/ce989ca0be80a3004929e3441367d6a8/170.png")'
                              }}>
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

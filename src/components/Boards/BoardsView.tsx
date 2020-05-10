import React from 'react';
import './../Boards/style/Boards.scss'
import {Link} from "react-router-dom";

export const BoardsView = (props: any) => {
    return (
        <div className="section">
            <nav className="navbar">
                <ul className="navbar navbar-list">
                    <li className="navbar-list navbar-list__item">
                        <Link to="/boards" className="navbar-list__link">
                            <span className="navbar-list__logo">
                                <i className="fab fa-trello">
                                </i>
                            </span>
                            <span className="navbar-list__title">Дошки</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="boards">
                <div className="boards-header">
                    <span className="boards-header__icon">
                        <i className="far fa-user">
                        </i>
                    </span>
                    <h3 className="boards-header__title">
                        Персональні дошки
                    </h3>
                </div>
                <ul className="boards-list">
                    {props.boardsRender}
                    {props.boardCreator}
                </ul>
            </div>
        </div>
    )
}

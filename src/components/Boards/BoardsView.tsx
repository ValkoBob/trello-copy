import React from 'react';
import './../Boards/style/Boards.scss'
import {Link} from "react-router-dom";

// @ts-ignore
export const BoardsView = ({boards}) => {
    return (
        <div className="member-boards">
            <div className="member-boards-container">
                    <div className="member-boards-sticky-container-wrapper">
                        <div className="home-left-sidebar-sticky-wrapper">
                            <nav className="home-left-sidebar">
                                <div>
                                    <ul className="home-left-sidebar-list">
                                        <li className="home-left-sidebar-item">
                                            <Link to="/boards" className="home-left-sidebar-item__link">
                                            <span className="home-left-sidebar-item__part1">
                                                <i className="fab fa-trello">
                                                </i>
                                            </span>
                                                <span className="home-left-sidebar-item__part2">
                                                Дошки
                                            </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="all-boards">
                            <div className="all-boards-container">
                                <div className="all-boards-content">
                                    <div className="all-boards-content-header">
                                        <div className="all-boards-content-header__icon">
                                            <span className="all-boards-content-header__icon-member">
                                                <i className="far fa-user">
                                                </i>
                                            </span>
                                        </div>
                                        <h3 className="all-boards-content-header__name">
                                            Персональні дошки
                                        </h3>
                                    </div>
                                    <div>
                                        <ul className="boards-page-board-section-list">
                                            {boards.map((board: any) => {
                                                return (
                                                    <li key={board.id} className="boards-page-board-section-list-item">
                                                        <div className="board-tile">
                                                            <span>{board.title}</span>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                            <li className="boards-page-board-section-list-item">
                                                <div className="board-tile">
                                                    <span>Створити нову дошку</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

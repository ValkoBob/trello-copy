import React from 'react';
import './../Board/style/Board.scss';

export const BoardView = () => {
    return (
        <div className="board">
            <div className="board-header">
                <div className="board-name">
                    board-name
                </div>
                <div className="board-users">
                    <div className="board-users__ava">ava</div>
                    <span className="board-users__invite">Запросити</span>
                </div>
                <div className="board-menu">
                    <span className="board-menu__icon">...</span>
                    <span className="board-menu__title">Показати меню</span>
                </div>
            </div>
            <div className="board-content">
                <div className="board-creator">
                    <span className="board-creator__icon">+</span>
                    <span className="board-creator__title">Додати список</span>
                </div>
                <div className="board-content__list">

                </div>
            </div>
        </div>
    )
}

import React from 'react';

type BoardMenuType = {
    isVisibleMenu: () => void,
    isVisible?: boolean
}
const BoardMenu = ({isVisibleMenu, isVisible} : BoardMenuType) => {
    return(
        <div className={`board-menu ${isVisible ? 'show' : 'hide'}`}>
            <div className="board-menu-header">
                <h3 className="board-menu-header__title">Меню</h3>
                <span onClick={isVisibleMenu} className="board-menu-header__close">X</span>
                <hr className="board-menu-divider"/>
            </div>
            <div className="board-menu-content">
            </div>
        </div>
    )
}

const BoardMenuButton = ({isVisibleMenu} : BoardMenuType) => {
    return(
        <div className="board-header-menu" onClick={isVisibleMenu}>
            <span className="board-header-menu__icon">...</span>
            <span className="board-header-menu__title">Показати меню</span>
        </div>
    )
}

export {BoardMenu, BoardMenuButton}
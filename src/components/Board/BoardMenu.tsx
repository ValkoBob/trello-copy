import React, {useEffect} from 'react';
import BoardDeleter from "./BoardDeleter";

type BoardMenuType = {
    isVisibleMenu: (isShow: boolean) => void,
    isVisible?: boolean
}

const BoardMenu = ({isVisibleMenu, isVisible} : BoardMenuType) => {
    return(
        <div className={`board-menu ${isVisible ? 'show' : 'hide'}`}>
            <div className="board-menu-header">
                <h3 className="board-menu-header__title">Меню</h3>
                <span onClick={()=>isVisibleMenu(false)}
                      className="board-menu-header__close">X</span>
                <hr className="board-menu-divider"/>
            </div>
            <div className="board-menu-content">
                <ul className="board-menu-navigation">
                    <BoardDeleter/>
                </ul>
            </div>
        </div>
    )
}

const BoardMenuButton = ({isVisibleMenu} : BoardMenuType) => {
    return(
        <div className="board-header-menu" onClick={()=>isVisibleMenu(true)}>
            <span className="board-header-menu__icon">...</span>
            <span className="board-header-menu__title">Показати меню</span>
        </div>
    )
}

export {BoardMenu, BoardMenuButton}
import React, {useState} from 'react';
import {NavBarView} from "./NavBarView";
import {NewBoardView} from "./NewBoardView";
import BoardCreator from '../Boards/BoardCreator';

export const NavBar = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => {
        setIsShow(!isShow)
    }
    return (
        <NavBarView
            newBoardView={<NewBoardView handleShow={handleShow}/>}
            boardCreator={<BoardCreator isShow={isShow} handleShow={handleShow}
            />}
        />
    )
}

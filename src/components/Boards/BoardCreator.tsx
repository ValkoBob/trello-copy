import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {changeTitle} from "./BoardsRender";
import {IBoards} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

interface Props {
    boardCreatorView?: JSX.Element | JSX.Element[];
    isShow: boolean;
    createBoard: (text: string, background: string) => any;
    boards?: IBoards[];
    handleShow: () => void;
}

const BoardCreator = (props: Props) => {
    const {isShow, createBoard, boards, handleShow} = props;
    const [text, setText] = useState('');

    const handleChange = (event: { target: HTMLInputElement; }) => setText(event.target.value);
    const handleCreateNewBoard =  async () => {
        if (text.length > 0) {
            const data = await createBoard(text, "");
            handleShow();
            window.location.assign(`/b/${data.id}/${changeTitle(text)}`)
        }
    }

    return (
        <>
            {props.boardCreatorView}
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={handleShow}>
                    <Modal.Title>
                        <label htmlFor="creatorInput">Створити нову дошку</label>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="Додати назву дошки"
                           id="creatorInput"
                           type="text"
                           className="boards-creator__input"
                           onChange={handleChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Закрити
                    </Button>
                    <button className="boards-creator__button" onClick={handleCreateNewBoard}>
                        Створити
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = ({boards}: { boards: IBoards[] }) => {
    return boards;
}

export default connect(mapStateToProps, actions)(BoardCreator);

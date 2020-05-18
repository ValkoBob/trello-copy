import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router";
import {changeTitle} from "./BoardsRender";
import {IBoardsResponse} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

const BoardCreator = (props: any) => {
    const { isShow, createBoard, boards, handleShow} = props;
    const [text, setText] = useState('');
    const history = useHistory();

    const handleChange = (event: { target: HTMLInputElement; }) => setText(event.target.value);
    const handleCreateNewBoard = () => {
        if (text.length > 0) {
            let id = 1;
            if(boards.length > 0){
                id = (+boards[boards.length - 1].id) + 1;
            }
            createBoard(id, text, "");
            handleShow();
            history.push(`b/${id}/${changeTitle(text)}`)
        }
    }

    return (
        <>
            {props.boardCreatorView}
            <Modal show={isShow}>
                <Modal.Header closeButton>
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

const mapStateToProps = ({boards}: { boards: IBoardsResponse[] }) => {
    return boards;
}

export default connect(mapStateToProps, actions)(BoardCreator);

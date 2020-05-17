import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router";
import {changeTitle} from "./BoardsRender";

export const BoardCreator = (props: any) => {
    const {id, createBoard} = props;
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event: { target: HTMLInputElement; }) => setText(event.target.value);
    const handleCreateNewBoard = () => {
        if (text.length > 0) {
            createBoard(id, text, "");
            handleClose();
            history.push(`b/${id}/${changeTitle(text)}`)
        }
    }

    return (
        <>
            <li className="boards-list__item" onClick={handleShow}>
                <div className="boards-list__tile boards-creator">
                    <span>Створити нову дошку</span>
                </div>
            </li>

            <Modal show={show} onHide={handleClose}>
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
                    <Button variant="secondary" onClick={handleClose}>
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

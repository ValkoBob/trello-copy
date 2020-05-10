import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export const BoardCreator = (props: any) => {
    const {length, createBoard} = props;
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event: { target: HTMLInputElement; }) => setText(event.target.value);
    const handleCreateNewBoard = () => {
        if (text.length > 0) {
            createBoard(length, text, "");
            handleClose();
        }
    }

    return (
        <>
            <li className="boards-list__item" onClick={handleShow}>
                <div className="boards-list__tile">
                    <span>Створити нову дошку</span>
                </div>
            </li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <input type="text" placeholder="Створити дошку" onChange={handleChange}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary" onClick={handleCreateNewBoard}>
                        <Link to={`/b/${length}/${text}`} style={{textDecoration: 'none'}}>
                            Створити
                        </Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

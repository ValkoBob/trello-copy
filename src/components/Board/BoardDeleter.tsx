import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory, useParams} from "react-router";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

interface Props {
    isVisibleMenu: (isShow: boolean) => void;
    deleteBoard: (id: string) => void;
}

const BoardDeleter = (props:  Props) => {
    const {id_board}: any = useParams();
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteBoard = () => {
        props.deleteBoard(id_board)
        props.isVisibleMenu(false)
        history.push(`/`)
    }

    return (
        <>
            <li onClick={handleShow} className="board-menu-navigation__item"><i className="fas fa-trash-alt">
            </i>Видалити дошку...</li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Ви впевнені, що хочете видалити дану дошку?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Зачекайте
                    </Button>
                    <button className="board-menu-navigation__delete" onClick={handleDeleteBoard}>
                        Так, видалити дошку
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default connect(null, actions)(BoardDeleter);

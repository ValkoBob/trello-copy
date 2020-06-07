import React from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import styled from "@emotion/styled";
import "./style/PopOverListMenu.scss"
import {useParams} from "react-router";

interface Props {
    popOverListMenu: () => void;
    deleteList: any;
    popover: boolean;
    position: number;
    listId: number;
}

const PopOverListMenu = (props: Props) => {
    const {id_board}: any = useParams();
    const boardId = +id_board;
    const {popover, position, listId} = props
    const PopOverListMenuWrapper = styled('div')`
    left: ${position}px;
    top: 130px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25),0 0 0 1px rgba(9,30,66,.08);
    overflow: hidden;
    position: absolute;
    right: -9999px;
    width: 304px;
    z-index: 70;
    display: block;
     `;

    const popOverClose = () => {
        props.popOverListMenu()
    }

    const archiveList = () => {
        props.deleteList(boardId, listId)
        props.popOverListMenu()
    }
    return (
        <div className={popover ? `show` : `hide`}>
            <PopOverListMenuWrapper>
                <div className="listmenu-header">
                <span className="listmenu-header listmenu-header__title">
                    Дії над списком
                </span>
                    <button onClick={popOverClose} className="listmenu-header__close">
                        x
                    </button>
                </div>
                <div className="listmenu-content">
                    <ul className="listmenu-content-list">
                        <li className="listmenu-content-list__item">
                            Додати картку…
                        </li>
                        <li className="listmenu-content-list__item">
                            Копіювати список...
                        </li>
                        <li className="listmenu-content-list__item">
                            Перемістити список...
                        </li>
                        <li className="listmenu-content-list__item">
                            Стежити
                        </li>
                    </ul>
                    <hr/>
                    <ul className="listmenu-content-list">
                        <li onClick={archiveList} className="listmenu-content-list__item">
                            Заархівувати цей список
                        </li>
                    </ul>
                </div>
            </PopOverListMenuWrapper>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    const popover = state.popOver.pop_over
    const position = state.popOver.position
    const listId = state.popOver.currentListId
    return {popover, position, listId};
}


export default connect(mapStateToProps, actions)(PopOverListMenu);

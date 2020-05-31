import React from 'react'
import './../style/PopOverCard.scss'
import {CardHeader} from "./CardHeader";
import {ILists, IState} from "../../../types";
import {connect} from "react-redux";
import * as actions from "../../../redux/actions";
import {CardDescription} from "./CardDescription";


const PopOverCard = (props: any) => {
    const {lists, isActivePopOverCard, dataPopOverCard} = props
    const expectedList = lists.find((list: ILists) => {
        return (list.id === dataPopOverCard.listId
            && list.boardId === dataPopOverCard.boardId)
    })
    return (
        <div className={`popover-wrapper ${isActivePopOverCard ? 'show' : 'hide'}`}>
            <div className="popover-card">
                <span
                    className="popover-card__close"
                    onClick={props.popOverCard}
                >x</span>
                <div className="popover-card-container">
                    <CardHeader
                        card={dataPopOverCard}
                        list={expectedList}
                        renameCard={props.renameCard}
                    />
                    <div className="popover-card-main">
                        <CardDescription
                            card={dataPopOverCard}
                            renameCard={props.renameCard}
                        />
                    </div>
                    <div className="popover-card-sidebar">
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state: IState) => {
    const {lists} = state.lists
    const {isActivePopOverCard, dataPopOverCard} = state.popOver
    return {lists, isActivePopOverCard, dataPopOverCard};
}

export default connect(mapStateToProps, actions)(PopOverCard);
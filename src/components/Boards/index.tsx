import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BoardsView} from "./BoardsView";
import * as actions from "../../redux/actions";
import {IBoardsProps, IBoardsResponse} from "../../types";
import {BoardCreator} from "./BoardCreator";
import {BoardsRender} from "./BoardsRender";

class Boards extends Component<IBoardsProps> {
    componentDidMount() {
        this.props.fetchBoards()
    }

    render() {
        const {boards, createBoard} = this.props;
        return (
            <BoardsView
                boardCreator={
                    <BoardCreator
                        length={(boards.length + 1)}
                        createBoard={createBoard}
                    />
                }
                boardsRender={
                    <BoardsRender
                        boards={boards}
                    />
                }
            />
        )
    }
}

const mapStateToProps = ({boards}: { boards: IBoardsResponse[] }) => {
    return boards;
}

export default connect(mapStateToProps, actions)(Boards);

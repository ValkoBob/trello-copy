import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BoardsView} from "./BoardsView";
import * as actions from "../../redux/actions";
import {IBoardsProps, IBoardsResponse} from "../../types";
import {BoardCreator} from "./BoardCreator";
import {BoardsRender} from "./BoardsRender";

class Boards extends Component<IBoardsProps> {
    state = {
        id: 1
    }
    componentDidMount() {
        console.log("component mount...")
        this.props.fetchBoards()
    }

    componentDidUpdate(prevProps: Readonly<IBoardsProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps!== this.props) {
            this.setIdBoards()
        }
    }

    setIdBoards = () => {
        const {boards} = this.props;
        if(boards.length > 0){
            const id = (+boards[boards.length - 1].id) + 1;
            this.setState({id})
        }
    }

    render() {
        const {boards, createBoard} = this.props;
        const {id} = this.state;
        return (
            <BoardsView
                boardCreator={
                    <BoardCreator
                        id={id}
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

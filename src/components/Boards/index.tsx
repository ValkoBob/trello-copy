import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BoardsView} from "./BoardsView";
import * as actions from "../../redux/actions";
import {IState} from "../../types";
import BoardCreator from "./BoardCreator";
import {BoardsRender} from "./BoardsRender";
import {BoardCreatorView} from "./BoardCreatorView";
import {Spinner} from "../MultipleComponents/Spinner";

class Boards extends Component<any> {
    state = {
        isShowCreator: false
    }
    componentDidMount() {
        this.props.fetchBoards()
    }

    handleShowCreator = () => {
        this.setState({
            isShowCreator: !this.state.isShowCreator
            })
    }

    render() {
        const {boards, loading, error} = this.props;
        const {isShowCreator} = this.state;
        if(loading){
            return (
                <Spinner />
            )
        } else {
            return (
                <BoardsView
                    boardCreator={
                        <BoardCreator
                            isShow={isShowCreator}
                            boardCreatorView={<BoardCreatorView handleShow={this.handleShowCreator}/>}
                            handleShow={this.handleShowCreator}
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
}

const mapStateToProps = (state: IState) => {
    const {boards} = state.boards;
    const {loading, error} = state.dataRequest
    return {boards, loading, error};
}

export default connect(mapStateToProps, actions)(Boards);

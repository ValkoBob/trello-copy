import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BoardsView} from "./BoardsView";
import * as actions from "../../redux/actions";

class Boards extends Component {
    componentDidMount() {
        // @ts-ignore
        this.props.fetchBoards()
    }
    render() {
        // @ts-ignore
        const {boards} = this.props.state.boards;
        return (
            <BoardsView
                // @ts-ignore
                boards={boards}
            />
        )
    }
}

// @ts-ignore
const mapStateToProps = (state) => {
    return {state};
}

export default connect(mapStateToProps, actions)(Boards);

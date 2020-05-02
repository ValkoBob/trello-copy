import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchBoards, deleteBoard, createBoard, fetchCards, createCard, renameCard} from "../redux/actions";

class TestComponent extends Component {
    componentDidMount() {
        // @ts-ignore
        /*this.props.fetchBoards();*/
        // @ts-ignore
        /*this.props.deleteBoard(2);*/
        // @ts-ignore
        /*this.props.createBoard(10, "hello", "world");*/
        // @ts-ignore
        /*this.props.fetchCards();*/
        // @ts-ignore
        this.props.renameCard(5, {title: "Himno!"})
        /*this.props.createCard({
            "id": 5,
            "list_id": 3,
            "board_id": 3,
            "title": "SHDHSJDH",
            "users": [],
            "description": "description",
            "slug": "",
            "archived": false,
            "created_at": new Date().getTime()
        });*/
    }

    render() {
        // @ts-ignore
        const {boards} = this.props.state;
        // @ts-ignore
        console.log(this.props.state)
        if (boards.length > 0) {
            console.log(boards)
            return (
                <div>
                    {
                        // @ts-ignore
                        boards[0].id} : {boards[0].title
                    }
                </div>
            )
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}

// @ts-ignore
const mapStateToProps = (state) => {
    return {state};
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        fetchBoards, deleteBoard, createBoard, fetchCards, createCard, renameCard
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

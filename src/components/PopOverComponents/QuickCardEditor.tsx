import React, {useEffect, useState} from "react";
import './style/QuickCardEditor.scss'
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ICards, IState} from "../../types";

interface Props {
    renameCard: (cardId: string, newData: ICards) => void;
    popOverCardEditor: (data?: ICards) => void;
    isActiveCardEditor: boolean;
    data: ICards;
}

const QuickCardEditor = (props: Props): any => {
    const {isActiveCardEditor, data} = props
    const [text, setText] = useState('');
    useEffect(() => {
        if (data.title !== undefined || true) {
            setText(data.title)
        }
    }, [data.title])
    const handleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
        (e.target as HTMLTextAreaElement).select()
    }
    const handleChange = (e: { target: HTMLTextAreaElement; }) => {
        setText(e.target.value)
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.which === 13) {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        if (text.length > 0) {
            data.title = text
            props.renameCard(data.id, data)
        } else {
            setText(text)
        }
        props.popOverCardEditor(data)
    }

    const handleArchived = () => {
        data.archived = true
        props.renameCard(data.id, data)
        props.popOverCardEditor(data)
    }
    return (
        <div className={`card-editor ${isActiveCardEditor ? 'show' : 'hide'}`}>
            <span
                onClick={() => props.popOverCardEditor}
                className="card-editor__close"
            >x</span>
            <div className="card-editor-textarea">
                    <textarea
                        className="card-editor-textarea__edit"
                        value={text}
                        onClick={handleClick}
                        onBlur={handleSubmit}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    >
                    </textarea>
                <button
                    onClick={handleSubmit}
                    className="card-editor__button"
                >Зберегти
                </button>
                <div className="card-editor-buttons">
                    <div className="card-editor-buttons__item">
                        <span
                            className="card-editor-buttons__item-text"
                        >Редагувати мітки</span>
                    </div>
                    <div className="card-editor-buttons__item">
                        <span
                            className="card-editor-buttons__item-text"
                        >Змінити учасників</span>
                    </div>
                    <div className="card-editor-buttons__item">
                        <span
                            className="card-editor-buttons__item-text"
                        >Перемістити</span>
                    </div>
                    <div className="card-editor-buttons__item">
                        <span
                            className="card-editor-buttons__item-text"
                        >Копіювати</span>
                    </div>
                    <div className="card-editor-buttons__item">
                        <span
                            className="card-editor-buttons__item-text"
                        >Змінити терміни виконання</span>
                    </div>
                    <div onClick={handleArchived} className="card-editor-buttons__item">
                        <span
                            className="card-editor-buttons__item-text"
                        >Архівувати</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: IState) => {
    const {isActiveCardEditor, data} = state.popOver
    return {isActiveCardEditor, data};
}

export default connect(mapStateToProps, actions)(QuickCardEditor);
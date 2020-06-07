import React, {useEffect, useState} from "react";
import './style/QuickCardEditor.scss'
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ICards, IState} from "../../types";

interface Props {
  renameCard: (cardId: number,
               boardId: number,
               listId: number,
               title: string) => void;
  deleteCard: (boardId: number, cardId: number) => void;
  popOverCardEditor: (data?: any) => void;
  isActiveCardEditor: boolean;
  data: any;
}

const QuickCardEditor = (props: Props) => {
  const {isActiveCardEditor, data} = props
  const [text, setText] = useState('');
  const {card, boardId, listId} = data;
  useEffect(() => {
    if (card !== undefined) {
      setText(card[1].title)
    }
  }, [card])
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
      card[1].title = text
      props.renameCard(card[0], boardId, listId, card[1].title)
    } else {
      setText(text)
    }
    props.popOverCardEditor(data)
  }

  const handleArchived = () => {
    props.deleteCard(boardId, card[0])
    props.popOverCardEditor(data)
  }
  return (
      <div className={`card-editor ${isActiveCardEditor ? 'show' : 'hide'}`}>
            <span
                onClick={() => props.popOverCardEditor(data)}
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

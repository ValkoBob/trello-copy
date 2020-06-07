import React, {useEffect, useState} from "react";
import icon_description from '../style/images/description-icon.png'
import {ICards} from "../../../types";

interface Props {
    data: any;
    editDescriptionInCard: (cardId: number,
                            boardId: number,
                            listId: number,
                            description: string) => void;
    update?: boolean;
}

export const CardDescription = (props: Props) => {
    const {data, editDescriptionInCard, update} = props
    const {card, boardId, listId} = data;
    const [isActive, setDescEditor] = useState(false)
    const [text, setText] = useState('');
    useEffect(() => {
        if (card[1].description !== undefined) {
            setText(card[1].description)
        }
    }, [card[1].description])
    const handleChange = (e: { target: HTMLTextAreaElement; }) => {
        setText(e.target.value)
    }
    const handleSubmit = () => {
        if (text.length > 0) {
            editDescriptionInCard(card[0], boardId, listId, text)
        } else {
            setText(text)
        }
        setDescEditor(false)
    }
    return (
        <div className='popover-card-main-description'>
            <div className="popover-card-main-description__title">
                <span>
                    <img src={icon_description} alt="description"/>
                </span>
                <h3>Опис</h3>
                <button className="editable hide">
                    Редагувати
                </button>
            </div>
            <div className="popover-card-main-description__details">
                {(!card[1].description) ?
                    <p onClick={() => setDescEditor(true)}
                       className={`popover-card-main-description__details-add
                        ${isActive ? 'hide' : 'show'}`}>
                        Додати детальніший опис…</p>
                    :
                    <p onClick={() => setDescEditor(true)}
                       className={`popover-card-main-description__details-text
                        ${isActive ? 'hide' : 'show'}`}>
                        {text}
                    </p>
                }
                <div className={`popover-card-main-description__edit
                     ${isActive ? 'show' : 'hide'}`}>
                    <textarea
                        className={card[1].description ? 'black-color' : ''}
                        placeholder={`${card[1].description ? '' : "Додати детальніший опис…"}`}
                        value={text ? text : ''}
                        onBlur={handleSubmit}
                        onChange={handleChange}
                    >
                    </textarea>
                    <div className="edit-buttons">
                        <button onClick={handleSubmit}
                                className="edit-buttons__submit">Зберегти</button>
                        <button
                            className="edit-buttons__close"
                            onClick={() => setDescEditor(false)}
                        >x
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

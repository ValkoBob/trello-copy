import React, {useEffect, useState} from "react";
import icon_description from '../style/images/description-icon.png'
import {ICards} from "../../../types";

interface Props {
    card: ICards;
    renameCard: (cardId: string, newData: ICards) => void;
}

export const CardDescription = (props: Props) => {
    const {card, renameCard} = props
    const [isActive, setDescEditor] = useState(false)
    const [text, setText] = useState('');
    useEffect(() => {
        if (card.description !== undefined) {
            setText(card.description)
        }
    }, [card.title])
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
            card.description = text
            renameCard(card.id, card)
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
                {(!card.description) ?
                    <p onClick={() => setDescEditor(true)}
                       className={`popover-card-main-description__details-add
                        ${isActive ? 'hide' : 'show'}`}>
                        Додати детальніший опис…</p>
                    :
                    <p onClick={() => setDescEditor(true)}
                       className={`popover-card-main-description__details-text
                        ${isActive ? 'hide' : 'show'}`}>
                        {card.description}
                    </p>
                }
                <div className={`popover-card-main-description__edit
                     ${isActive ? 'show' : 'hide'}`}>
                    <textarea
                        className={card.description ? 'black-color' : ''}
                        placeholder={`${card.description ? '' : "Додати детальніший опис…"}`}
                        value={text ? text : ''}
                        onBlur={handleSubmit}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
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
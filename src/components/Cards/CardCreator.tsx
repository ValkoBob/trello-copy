import React, {useState} from "react";

type PropsType = {
    addCardName: (text: string) => void
}
export const CardCreator = ({addCardName}: PropsType) => {
    const [isActive, setActiveCreator] = useState(false)
    const [nameCard, setNameCard] = useState('')
    const handleBlur = (e: any) => {
        if (e.relatedTarget === null || e.relatedTarget.id !== 'card-creator-button') {
            setActiveCreator(false)
            setNameCard('')
        }
    }
    const handleChange = (e: { target: HTMLTextAreaElement; }) => {
        setNameCard(e.target.value)
    }
    const handleKeyDown = (e: any) => {
        if (e.which === 13) {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        if (nameCard.length > 0) {
            addCardName(nameCard)
            setNameCard('')
            setActiveCreator(false)
        }
    }
    return (
        <>
            <div className={`card-creator ${isActive ? "show" : "hide"}`}>
                <textarea placeholder="Увести назву для цієї картки…"
                          value={nameCard}
                          className="card-creator__input"
                          onChange={handleChange}
                          onKeyDown={handleKeyDown}
                          onBlur={handleBlur}
                >
                </textarea>
                <div className="card-creator-button">
                    <button id='card-creator-button'
                            onClick={handleSubmit}
                            className="card-creator-button__add">Додати картку</button>
                    <button
                        className="card-creator-button__close"
                        onClick={() => setActiveCreator(false)}
                    >x
                    </button>
                </div>
            </div>
            <div className={`board-list-add ${isActive ? "hide" : "show"}`}>
                <div onClick={() => setActiveCreator(true)}
                     className="board-list-add__card">
                    <span className="board-list-add__icon-add">+</span>
                    <span className="board-list-add__title">Додати картку</span>
                    <span className="board-list-add__title-another hide">Додати картку</span>
                </div>
            </div>
        </>
    )
}
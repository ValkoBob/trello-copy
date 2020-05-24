import React, {useState} from "react";

type PropsType = {
    addListName: (text: string) => void,
    isActive: boolean,
    setActiveCreator: (isShow: boolean) => void
}
export const ListCreator = ({addListName, isActive, setActiveCreator}: PropsType) => {
    const [nameList, setNameList] = useState('')
    const handleBlur = (e: any) => {
        if (e.relatedTarget === null || e.relatedTarget.id !== 'board-creator-form__input') {
            setActiveCreator(false)
            setNameList('')
        }
    }
    const handleChange = (e: { target: HTMLInputElement; }) => {
        setNameList(e.target.value)
    }
    const handleKeyDown = (e: any) => {
        if (e.which === 13) {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        if (nameList.length > 0) {
            addListName(nameList)
            setNameList('')
            setActiveCreator(false)
        }
    }
    return (
        <div className="board-creator">
            <div onClick={() => setActiveCreator(true)}
                 className={`board-creator-container ${isActive ? "hide" : "show-creator"}`}
            >
                <span className="board-creator__icon">+</span>
                <span className="board-creator__title">Додати список</span>
            </div>
            <div className={`board-creator-form ${isActive ? "show" : "hide"}`}>
                <input type="text"
                       placeholder="Увести назву списку..."
                       value={nameList}
                       className="board-creator-form__input"
                       maxLength={512}
                       onChange={handleChange}
                       onKeyDown={handleKeyDown}
                       onBlur={handleBlur}
                />
                <div className="board-creator-form__footer">
                    <button id='board-creator-form__input'
                            onClick={handleSubmit}
                            className="board-creator-form__footer-input"
                    >Додати список
                    </button>
                    <div onClick={() => setActiveCreator(false)}
                         className="board-creator-form__close"
                    >x
                    </div>
                </div>
            </div>
        </div>
    )
}
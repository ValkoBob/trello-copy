import React, {useState} from "react";

type EditableNameType = {
    name: string,
    id: number | undefined,
    editText: (id: number, text: string) => void,
    editClass: (className: string) => string,
    className: string
}

export const EditableName = ({name, id, editText, editClass, className}:
                                 EditableNameType) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSelected, setIsSelected] = useState(false)
    const [text, setText] = useState(name);
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsDisabled(false);
        if (!isSelected) {
            (e.target as HTMLInputElement).select();
            setIsSelected(true)
        }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13) {
            handleSubmit(e)
        }
    }
    const handleChange = (e: { target: HTMLInputElement; }) => {
        setText(e.target.value)
    }
    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>
        | React.FocusEvent<HTMLInputElement>) => {
        if (text.length > 0 && id != null) {
            editText(id, text)
        } else {
            setText(name)
        }
        if (isSelected) {
            const selection: Selection | null = window.getSelection()
            if (selection != null) {
                selection.removeAllRanges();
            }
            setIsSelected(false)
        }
        setIsDisabled(true);
    }

    if (!isDisabled) {
        className = editClass(className)
    }
    return (
        <div className={className}>
            <input type="text"
                   onClick={handleClick}
                   onBlur={handleSubmit}
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
                   value={text}
                   readOnly={isDisabled}/>
        </div>
    )
}


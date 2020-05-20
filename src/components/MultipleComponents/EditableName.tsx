import React, {useState} from "react";

type EditableNameType = {
    name: string,
    id: string,
    editText: (id: string, text: string) => void,
    editClass: (className: string) => string,
    className: string
}

export const EditableName = ({name, id, editText, editClass, className}: EditableNameType) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const [text, setText] = useState(name);
    const handleClick = (e: any) => {
        setIsDisabled(false);
        if(!isSelected) {
            e.target.select();
        }
    }
    const handleKeyDown = (e: any) => {
        if (e.which === 13) {
            handleSubmit()
        }

    }
    const handleChange = (e: { target: HTMLInputElement; }) => {
        setText(e.target.value)
    }
    const handleSubmit = () => {
        if(text.length > 0){
            editText(id, text)
        } else {
            setText(name)
        }
        setIsDisabled(true);
        setIsSelected(true);
    }

    if(!isDisabled){
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


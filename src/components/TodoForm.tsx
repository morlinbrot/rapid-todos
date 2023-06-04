import { useTranslation } from "react-i18next";
import { addTodo, toggleTodoForm } from "../store/store";
import { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../store/hooks";

export function TodoForm() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [text, setText] = useState("");

    const handleChange = (evt: SyntheticEvent<HTMLInputElement>) => {
        console.log(evt.currentTarget.value);
        setText(evt.currentTarget.value)
    }

    const handleConfirm = (evt: SyntheticEvent) => {
        evt.preventDefault();
        const id = 0;

        const todo = {
            id,
            text,
            done: false,
        };

        setText("");
        dispatch(addTodo(todo));
    }

    const handleCancel = (evt: SyntheticEvent) => {
        evt.preventDefault();
        setText("");
        dispatch(toggleTodoForm());
    }

    return (
        <form onSubmit={addTodo}>
            <input id="todoText" type="text" value={text} onChange={handleChange}></input>
            <button disabled={!text.length} onClick={handleConfirm}>{t('actions.confirm')}</button>
            <button onClick={handleCancel}>{t('actions.cancel')}</button>
        </form>
    )
}
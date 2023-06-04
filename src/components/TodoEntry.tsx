import { SyntheticEvent } from "react";
import { useAppDispatch } from "../store/hooks";
import { toggleTodo } from "../store/store";

export type Todo = {
    id: number,
    text: string;
    done: boolean;
}

// TODO: Make this work properly.
const Checkbox = ({ checked }: { checked: boolean }) => {
    const handleChange = (evt: SyntheticEvent) => {
        evt.stopPropagation();
        evt.preventDefault();
    };

    return (
        <input type="checkbox" checked={checked} onChange={handleChange}></input>
    )
}

export function TodoEntry({ todo: { id, text, done } }: { todo: Todo }) {
    const dispatch = useAppDispatch();

    const handleCheck = (evt: SyntheticEvent) => {
        evt.preventDefault();
        dispatch(toggleTodo(id));
    }

    return (
        <li id={`${id}`} >
            <div onClick={handleCheck}>
                <Checkbox checked={done} />
                <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{text}</span>
            </div>
        </li>
    )
}
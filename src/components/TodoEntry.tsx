import { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { deleteTodo, toggleTodo } from "../store/store";

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
        <input type="checkbox" checked={!!checked} onChange={handleChange}></input>
    )
}

export function TodoEntry({ todo: { id, text, done } }: { todo: Todo }) {
    const dispatch = useAppDispatch();

    const [hovered, setHovered] = useState(false);

    const handleCheck = (evt: SyntheticEvent) => {
        evt.preventDefault();
        dispatch(toggleTodo(id));
    }

    const handleDelete = (evt: SyntheticEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
        dispatch(deleteTodo(id));
    }

    return (
        <li id={`${id}`} onMouseEnter={_ => setHovered(true)} onMouseLeave={_ => setHovered(false)}>
            <div onClick={handleCheck}>
                <Checkbox checked={done} />
                <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{text}</span>
                {hovered && <span onClick={handleDelete}>🗑️</span>}
            </div>
        </li>
    )
}
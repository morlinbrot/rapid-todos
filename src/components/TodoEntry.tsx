
export type Todo = {
    id: number,
    text: string;
    done: boolean;
}

export function TodoEntry({ todo: { id, text, done } }: { todo: Todo }) {
    return (
        <li id={`${id}`}>{text}</li>
    )
}
import { useTranslation } from "react-i18next";
import { TodoEntry } from "./TodoEntry";
import { useAppSelector } from "../store/hooks";

export function TodoList() {
    const { t } = useTranslation();

    const todos = useAppSelector(state => state.todos.list);

    return (
        <>
            <div>
                <h1>
                    {todos.length ? t("list.title") : t("list.fallback")}
                </h1>
            </div>
            <div>
                <ul>
                    {todos.map(todo => <TodoEntry todo={todo} />)}
                </ul>
            </div>
        </>
    );

}

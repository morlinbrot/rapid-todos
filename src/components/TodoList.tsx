import { useTranslation } from "react-i18next";
import { TodoEntry } from "./TodoEntry";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { TodoForm } from "./TodoForm";
import { toggleTodoForm } from "../store/store";

export function TodoList() {
    const { t } = useTranslation();

    const todos = useAppSelector(state => state.todos.list);
    const showForm = useAppSelector(state => state.config.showForm);

    const dispatch = useAppDispatch();

    const toggle = () => {
        // TODO: Reset current state
        dispatch(toggleTodoForm());
    }

    return (
        <>
            <div>
                <h1>
                    {todos.length ? t("list.title") : t("list.fallback")}
                </h1>
            </div>
            <div>
                <button onClick={toggle}>{t('actions.addTodo')}</button>
                {showForm && <TodoForm />}
            </div>
            <div>
                <ul>
                    {todos.map(todo => <TodoEntry key={todo.id} todo={todo} />)}
                </ul>
            </div>
        </>
    );

}

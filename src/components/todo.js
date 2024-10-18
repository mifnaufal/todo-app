import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeletIcon from "@mui/icons-material/Delete";
export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);
    const handleChange = (e) => {
        e.preventDefault();
        if(todo.completed === true) {
            setNewTitle(todo.title);
        }else{
            todo.title = "";
            setNewTitle(e.target.value);
        }
    }
    return (
        <div className="todo">
            <input
            style={{textDecoration: todo.completed && "inline-through"}}
            type="text"
            value={todo.title === "" ? newTitle : todo.title}
            className="list"
            onChange={handleChange}
            />
            <div>
                <button
                className="button_complate"
                onClick={() => toggleComplete(todo)}
                >
                    <CheckCircleIcon id="i"/>
                </button>
                <button
                className="button_edit"
                onClick={() => handleEdit (todo, newTitle)}
                >
                    <EditIcon id="i"/>
                </button>
                <button
                className="button_delete"
                onClick={() => handleDelete(todo.id)}
                >
                    <DeletIcon id="i"/>
                </button>
            </div>
        </div>
    );
}
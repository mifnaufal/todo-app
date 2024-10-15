import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
    const [title, setTitle] = React.useState("");
    const handleSubmit = async (e) => {
        e.prevenDefault();
        if (title !== "") {
            await addDoc;(collection(db, "todos"),{
                title,
                completed:false,
            });
            setTitle("");
        }
    };

    return (
        <from onSubmit={handleSubmit}>
            <div className="input_container">
                <input type="text"
                placeholder="Enter Todo..."
                value={title} onChange={(e) =>
                setTitle(e.target.value)}/>
            </div>
            <div className="btn_container">
                <button>Add</button>
            </div>
        </from>
    );
}
import Title from './components/Title';
import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/todo';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from './firebase';

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todoArray = [];
      querySnapshot.forEach((doc) => {
        todoArray.push({ ...doc.data(), id: doc.id });
      }); 
      setTodos(todoArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App
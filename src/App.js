import Title from './components/Title';
import './App.css';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
    </div>
  );
}

export default App;

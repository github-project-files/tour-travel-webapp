import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

const ToDoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} className="tod-border"> 
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          required
        />
        <div className="add-btn"><button type="submit">Add</button></div>
      </form>
   
     
      {todos.map((todo) => (
        <div key={todo.id} id="listof-todos" className="todo">
          <div className="todo-text">
          <div> <i class="fa fa-check-circle"> </i> </div>
            <div>
              <div type="checkbox"
              id="completed"            
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)} />
              </div>
            
            {todo.id === todoEditing ? (
              <input
                type="text"
                placeholder={todo.text}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>
                <div><i className="fa fa-edit"></i></div>
              </button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>
                <div><i className="fa fa-pencil"></i></div>
              </button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>
              <div><i className="fa fa-trash"></i></div>
            </button>
          </div>
        </div>
      ))}
    
    </div> /** fonly form  */
  );
};

export default ToDoList;

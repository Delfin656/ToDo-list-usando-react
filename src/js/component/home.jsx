import React, { useState } from "react";
//import { Input } from "./Todo.jsx"

//include images into your bundle
//import { Task } from "./Task.jsx";

//create your first component
const home = () => {
  const [newTask, setNewTask] = useState({ label: "", done: false });
  const [todo, setTodo] = useState([]);
  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };

  const addTask = (event) => {
    if (event.key == "Enter") {
      if (newTask.label.trim() != "") {
        setTodo([...todo, newTask]);
        setNewTask({ label: "", done: false });
        console.log("debo guardar la tarea");
      } else {
        console.log("no se aceptan cambios vacios");
      }

      // console.log("presiona enter")
    }
  };
  const deleteTask = (id) => {
    const newListTask = todo.filter((task, index) => id != index);
    setTodo(newListTask);
  };
  return (
    <div className="container">
      <div className="">
        <h1 className="text-center">ToDos</h1>
      </div>
      <div className="">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={newTask.label}
            name={"label"}
            placeholder="Agregar tareas"
            onChange={handleChange}
            onKeyDown={addTask}
          />
        </div>
      </div>
      <div>
        <ul>
          {todo.map((task, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={() => deleteTask(index)}
                ></button>
                {task.label}
              </li>
            );
          })}
        </ul>
		
        {todo.length + " tareas"}
      </div>
    </div>
  );
};

export default home;

import React, { useState } from "react";
import "./index.css";
import TaskItem from "../TaskItem";

function TaskForm() {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    if (taskInput.trim() !== "") {
      const [taskName, count] = taskInput.split(/\s+(\d+)$/);
      const numberOfTasks = parseInt(count) || 1;
      const newTasks = Array.from({ length: numberOfTasks }, (_, index) => ({
        task_id: todoList.length + index + 1,
        task: taskName,
        updatedTimes: 0,
      }));
      setTodoList([...todoList, ...newTasks]);
      setTaskInput("");
    }
  };

  const editTask = (task_id, editedTask) => {
    setTodoList(
      todoList.map((each) =>
        each.task_id === task_id ? { ...each, task: editedTask } : each
      )
    );
  };

  const updatedNoOfTimesEdited = (task_id) => {
    setTodoList(
      todoList.map((each) =>
        each.task_id === task_id
          ? { ...each, updatedTimes: each.updatedTimes + 1 }
          : each
      )
    );
  };

  const deleteTask = (task_id) => {
    const newTodoList = todoList.filter((each) => task_id !== each.task_id);
    setTodoList(newTodoList);
  };

  console.log(todoList);
  return (
    <div className="main-container">
      <div className="task-form-container">
        <h1 className="main-heading">Day Goals!</h1>
        <div>
          <input
            type="text"
            className="input-box box"
            placeholder="Add a Todo"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <br />
          <button className="box input-button" onClick={addItem}>
            Add Task
          </button>
        </div>
        <ul className="un-ordered-list">
          {todoList.map((each) => (
            <TaskItem
              eachItem={each}
              key={each.task_id}
              deleteTask={deleteTask}
              editTask={editTask}
              updatedNoOfTimesEdited={updatedNoOfTimesEdited}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskForm;

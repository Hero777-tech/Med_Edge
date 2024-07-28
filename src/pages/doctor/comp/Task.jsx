import style from "./Task.module.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TaskForm() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");
  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "" || taskDetails.trim() === "") {
      setError("Both Task Title and Task Details are required.");
      return;
    }

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = { title: taskTitle, details: taskDetails };
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, { title: taskTitle, details: taskDetails }]);
    }
    setTaskTitle("");
    setTaskDetails("");
    setError("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTaskTitle(tasks[index].title);
    setTaskDetails(tasks[index].details);
    setEditingIndex(index);
  };

  return (
    <div className={style.contain}>
      <div className={style.task}>
        <h3>Add a new task</h3>
        <Form onSubmit={handleAddTask}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Task Title..."
              value={taskTitle}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Task Details..."
              rows={2}
              value={taskDetails}
              onChange={handleDetailsChange}
            />
          </Form.Group>
          {error}
          <Button className={style.butt} onClick={handleAddTask}>
            {editingIndex !== null ? "Update Task" : "Add Task"}
          </Button>
        </Form>
      </div>
      <div className={style.main}>
        <h3>Tasks</h3>
        {tasks.map((task, index) => (
          <div className={style.newtask} key={index}>
            <b>{task.title}:</b>
            {task.details}
            <br />
            <Button variant="danger" onClick={() => handleDeleteTask(index)}>
              Delete
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleEditTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { EditOutlined } from "@ant-design/icons";
import { toggleTask, editTask } from "../Redux/Actions";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = ({ task, id, isDone }) => {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="mytask" key={id} style={{ backgroundColor: isDone ? "#454545" : "#262626" }}>
      <input
        checked={isDone}
        type="checkbox"
        onClick={() => dispatch(toggleTask(id))}
        style={{ gridArea: "check", alignSelf: "center", justifySelf: "end" }}
      />

      <p
        style={{
          gridArea: "task",
          margin: "0px",
          textDecoration: isDone ? "line-through 3px red" : "none",
        }}
      >
        {task}
      </p>

      <button
        style={{ gridArea: "edit", alignSelf: "center" }}
        onClick={() => setShow(true)}
      >
        <EditOutlined />
      </button>

      <Modal
        style={{ color: "#000" }}
        show={show}
        onHide={() => setShow(false)}
      >
        <input
          type="text"
          placeholder="Edit task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            dispatch(editTask(id, newTask));
            setShow(false);
            setNewTask("");
          }}
        >
          Save Changes
        </Button>
      </Modal>
    </div>
  );
};

export default Task;

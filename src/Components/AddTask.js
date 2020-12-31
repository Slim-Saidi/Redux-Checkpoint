import React, { useState } from "react";
import { addTask } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add a task!"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTask(newTask));
            setNewTask("");
          }}
        >
          <PlusOutlined />
        </button>
      </form>
    </div>
  );
};

export default AddTask;

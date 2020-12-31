import { v4 as uuidv4 } from "uuid";

export const addTask = (newTask) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: uuidv4(),
      task: newTask,
      isDone: false,
    },
  };
};

export const editTask = (id, newTask) => {
  return {
    type: "EDIT_TASK",
    payload: {
      id,
      task: newTask,
    },
  };
};

export const toggleTask = (id) => {
  return {
    type: "TOGGLE_TASK",
    payload: id,
  };
};

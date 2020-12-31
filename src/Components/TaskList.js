import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = ({ change }) => {
  let taskList = useSelector((state) => state.tasks);
  if (change === "Done") {
    taskList = taskList.filter((el) => el.isDone === true);
  } else if (change === "Unfinished") {
    taskList = taskList.filter((el) => el.isDone === false);
  } else {
    taskList = taskList;
  }

  return (
    <div>
      {taskList.map((el, i) => (
        <Task key={i} task={el.task} id={el.id} isDone={el.isDone} />
      ))}
    </div>
  );
};

export default TaskList;

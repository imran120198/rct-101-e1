import React,{useState} from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import data from "../tasks.json";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  // const [tasks, setTask] = useState([])

  // const addTask = (newTask) => {
  //   setTask([...tasks, newTask])
  // }
  console.log(data)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox"/>
      <div data-cy="task-text">
        {data.map((Task) => {
          return (
            <div className={styles.tasks}>
              <span>{Task.text}</span><Counter/>
              {/* <p>{Task.count}</p> */}
            </div>
          )
        })}
      </div>
      {/* Counter here */}
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;

import React, {useState} from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = useState("")
  const [task,settask] = useState([]);

  const handlechange=(e)=>{
    settask(e.target.value)
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} placeholder="Add task" onChange={handlechange}/>
      <button data-cy="add-task-button" onClick={() => {
        value={value}
        setValue("");
      }}>+</button>
    </div>
  );
};

export default AddTask;

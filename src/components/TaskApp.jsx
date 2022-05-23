import React from "react";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import data from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <div className="header">
      <TaskHeader/>
      </div>
      
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Tasks/>
    </div>
  );
};

export default TaskApp;

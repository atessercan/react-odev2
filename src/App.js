import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  const [isTaskDone, setIsTaskDone] = useState(false);
  const [task, setTask] = useState([]);
  const [freshLS, setFreshLS] = useState(0);
  const [taskListType, setTaskListType] = useState();
  const [taskNumber, setTaskNumber] = useState(0);
  let key;
  let newTask = {};
  let newTaskArray = [];

  const refReshLS = async () => {
    setFreshLS(Math.random());
  };

  const listType = (e) => {
    setTaskListType(e);
  };

  const clearCompleted = (e) => {
    let i;

    for (i = localStorage.length; i > -1; i--) {
      key = localStorage.key(i);
      newTask = { ...JSON.parse(localStorage.getItem(key)) };
      if (newTask.isTaskDone === true) {
        localStorage.removeItem(key);
      }
    }
    refReshLS();
  };

  const checkBoxHandler = (event) => {
    let taskEditing;
    let taskKey = event.target.id;
    let newTaskStatus = event.target.checked;
    taskEditing = {
      ...JSON.parse(localStorage.getItem(taskKey)),
      isTaskDone: newTaskStatus,
    };
    setIsTaskDone(event.target.checked);
    localStorage.setItem(taskKey, JSON.stringify(taskEditing));

    refReshLS();
  };
  const onDestroyHandler = (props) => {
    localStorage.removeItem(props.target.id);
    refReshLS();
  };

  const fetchFromLS = () => {
    setTaskNumber(0);
    if (localStorage.length === 0) {
      setTask([]);
    } else if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        newTask = { ...JSON.parse(localStorage.getItem(key)) };
        newTaskArray.push(newTask);
        if (newTask.isTaskDone === false) {
          setTaskNumber((previosState) => previosState + 1);
        }
      }
      newTaskArray.pop();
      setTask([...newTaskArray, newTask]);
    }
  };

  useEffect(() => {
    fetchFromLS();
  }, [freshLS, taskListType]);

  return (
    <div className="todoapp">
      <Header refReshLS={refReshLS} />
      <Main
        checkBoxHandler={checkBoxHandler}
        task={task}
        isTaskDone={isTaskDone}
        listType={taskListType}
        onDestroy={onDestroyHandler}
      />
      <Footer
        listType={listType}
        clearCompleted={clearCompleted}
        taskNumber={taskNumber}
      />
    </div>
  );
}

export default App;

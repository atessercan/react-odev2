import { useRef } from "react";
const Header = (props) => {
  const taskInputRef = useRef();

  const task = {
    key: "",
    name: "",
    isTaskDone: false,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskInputRef.current.value.trim() !== "") {
      task.key = Math.floor(Math.random() * 10000);
      task.name = taskInputRef.current.value;
      task.isTaskDone = false;

      localStorage.setItem(task.key, JSON.stringify(task));

      props.refReshLS();
      taskInputRef.current.value = "";
    }
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={submitHandler}>
        <input
          ref={taskInputRef}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Header;

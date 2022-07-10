const Task = (props) => {
  return (
    <div>
      <li className={props.isTaskDone ? "completed" : ""}>
        <div className="view">
          <input
            id={props.id}
            className="toggle"
            type="checkbox"
            onChange={props.onChange}
          />
          <label>{props.taskname}</label>
          <button
            className="destroy"
            onClick={props.onDestroy}
            id={props.id}
          ></button>
        </div>
      </li>
    </div>
  );
};

export default Task;

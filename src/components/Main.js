import Task from "./Task";
const Main = (props) => {
  let listType = props.listType;
  const onDestroy = (e) => {
    props.onDestroy(e);
  };
  return (
    <div className="main">
      <ul className="todo-list">
        {listType !== undefined &&
          props.task
            .filter((a) => a.isTaskDone === listType)
            .map((item) => (
              <Task
                id={item.key}
                key={item.key}
                isTaskDone={item.isTaskDone}
                taskname={item.name}
                onChange={props.checkBoxHandler}
              />
            ))}
        {listType === undefined &&
          props.task.map((item) => (
            <Task
              id={item.key}
              key={item.key}
              isTaskDone={item.isTaskDone}
              taskname={item.name}
              onChange={props.checkBoxHandler}
              onDestroy={onDestroy}
            />
          ))}
      </ul>
    </div>
  );
};

export default Main;

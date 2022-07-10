const Footer = (props) => {
  const clickHandler = (event) => {
    if (event.target.id === "completed") {
      props.listType(true);
    } else if (event.target.id === "active") {
      props.listType(false);
    } else if (event.target.id === "all") {
      props.listType(undefined);
    } else if (event.target.id === "clear-completed") {
      props.clearCompleted();
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.taskNumber + " "}</strong>
        {props.taskNumber === 1 ? "item left" : "items left"}
      </span>

      <ul className="filters">
        <li>
          <a href="#/" id="all" className="selected" onClick={clickHandler}>
            All
          </a>
        </li>
        <li>
          <a href="#/" id="active" onClick={clickHandler}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" id="completed" onClick={clickHandler}>
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        id="clear-completed"
        onClick={clickHandler}
      >
        Clear completed
      </button>
    </footer>
  );
};
export default Footer;

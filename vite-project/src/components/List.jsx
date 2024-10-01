import Todo from "./Todo";

export default function List(props) {
  const handleDelete = props.filter((ele) => !ele);
  return (
    <div className="list-place">
      <div className="list">
        <ul>
          {props.todos.map((todo, index) => (
            <li key={index}>
              <div className="checbox">
                <form action="">
                  <input type="checkbox" name="" />
                </form>
              </div>

              <span>{todo}</span>

              <div className="edit">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </div>

              <div className="delete" onClick={handleDelete}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="icons">
        <div className="edit">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div
          className="delete"
          onClick={() => {
            if (todos.length > 0) {
              onRemove(todos.length - 1);
            }
          }}
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div> */}
    </div>
  );
}

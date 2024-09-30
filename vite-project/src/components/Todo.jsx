export default function Todo() {
  return (
    <div>
      <div className="header">
        <div className="logo-image">
          <h1>Diamond</h1>
          <div className="logo">
            <img src="images/diamond.jpg" alt="logo-image" />
          </div>
        </div>
        <div className="date">05-10-2024</div>
      </div>

      <div className="quote">
        <h1>
          Simplicity boils down to two steps: Identify the essential. Eliminate
          the rest.
        </h1>
        <p>
          <small>Leo Babauta, Author and journalist</small>{" "}
        </p>
        <div className="writing-image">
          <img src="./images/todo.jpeg" alt="" />
        </div>
      </div>
      <div className="inform-place">
        <form action="">
          <input type="text" placeholder="Add your list here" />
        </form>
        <div className="add">ADD</div>
      </div>

      <div className="list-place">
        <div className="checbox">
          <form action="">
            <input type="checkbox" name="" id="" />
          </form>
        </div>
        <div className="list">
          <ul>
            <li>Have you seen me today</li>
          </ul>
        </div>
        <div className="icons">
          <div className="edit">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
          <div className="delete">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

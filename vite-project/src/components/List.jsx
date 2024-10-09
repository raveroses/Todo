import Delete from "./Delete";
import Edit from "./EditBtn";
export default function List({ list, handleDelete }) {
  return (
    <div>
      {/* <i className="fa fa-trash" aria-hidden="true"></i> */}
      <ul>
        {list.map((ele, index) => (
          <li key={index}>
            {ele}
            <Delete onClick={() => handleDelete(index)} />
            <Edit />
          </li>
        ))}
      </ul>
    </div>
  );
}

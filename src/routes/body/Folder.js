import React from "react";

const Folder = ({ todo }) => {
  return (
    <div>
      <div className="card d-flex flex-column px-3 me-5">
        <h2 className="">{todo.title}</h2>
        <ul className="list-unstyled">
          {todo.cards.map((item) => {
            return <li className="">{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Folder;

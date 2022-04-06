import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import Folder from "./Folder";

const Body = () => {
  const [newFolder, setNewFolder] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleFolderChange = (event) => {
    setNewFolder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: newFolder }));
    setNewFolder("");
  };

  return (
    <div className="container d-flex align-items-start">
      {todos.map((todo) => {
        return <Folder todo={todo} key={todo.id} />;
      })}
      <form onSubmit={handleSubmit}>
        <input
          value={newFolder}
          onChange={handleFolderChange}
          placeholder="Add another list"
          className="p-1"
        />
        <button type="submit" className="d-none"></button>
      </form>
    </div>
  );
};

export default Body;

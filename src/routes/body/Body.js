import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Folder from "./Folder";

const Body = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="container d-flex align-items-start">
      {todos.map((todo) => {
        return <Folder todo={todo} />;
      })}
      <input></input>
    </div>
  );
};

export default Body;

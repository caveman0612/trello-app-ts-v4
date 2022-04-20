import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, switchCards, switchFolders } from "../../redux/todoSlice";
import Folder from "./Folder";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

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

  function dragEnd(result) {
    const { destination, source, draggableId, type } = result;
    // console.log("end", destination, source, draggableId, type);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (type === "column") {
      dispatch(switchFolders({ destination, source, draggableId }));
    } else {
      dispatch(switchCards({ destination, source, draggableId }));
    }
  }

  return (
    <DragDropContext onDragEnd={dragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => {
          return (
            <div
              className="container-fluid d-flex align-items-start"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.folderOrder.map((id, idx) => {
                const folder = todos.folders[id];
                return (
                  <Folder
                    folder={folder}
                    key={folder.id}
                    index={idx}
                    cards={todos.cards}
                  />
                );
              })}
              {provided.placeholder}
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
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Body;

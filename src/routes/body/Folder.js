import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard, deleteTodo, deleteCard } from "../../redux/todoSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Folder = ({ folder, cards, index }) => {
  const dispatch = useDispatch();
  const [newCard, setNewCard] = useState("");

  function handleNewCardChange(event) {
    setNewCard(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addCard({ id: folder.id, title: newCard }));
    setNewCard("");
  }

  function handleDeleteFolder(event) {
    const confirm = window.confirm("This will delete the whole folder!");
    if (confirm) {
      folder.cardIds.forEach(id => {
        dispatch(deleteCard({folderId: folder.id, cardId: id}))
      })
      dispatch(deleteTodo({ id: folder.id }))};
  }

  function handleDeleteCard(cardId) {
    const confirm = window.confirm("This will the card permentally");
    confirm && dispatch(deleteCard({ folderId: folder.id, cardId }));
  }

  return (

    <div>
      <div className="card d-flex flex-column px-3 me-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="">{folder.title}</h2>
          <button
            style={{ height: "30px", width: "30px" }}
            className="btn border d-flex justify-content-center align-items-center"
            onClick={handleDeleteFolder}
          >
            X
          </button>
        </div>
    <Droppable droppableId={`${folder.id}`} index={index} >
        {(provided1) => (
          <div className="list-unstyled"  {...provided1.droppableProps} ref={provided1.innerRef}>
          {folder.cardIds.map((id, idx) => {
            const card = cards[id];
            return (
              <Draggable draggableId={`${id}`} index={idx} key={id}>
              {(provided2) => (
                <div
                
                {...provided2.draggableProps}
                {...provided2.dragHandleProps}
                ref={provided2.innerRef}
                className=" border mb-2 p-1 ps-2 d-flex justify-content-between bg-light"
                key={id}
              >
              {/* add no selection css */}
                {card.title}
                <button
                  style={{ height: "20px", width: "20px" }}
                  className="btn border d-flex justify-content-center align-items-center text-danger"
                  onClick={() => handleDeleteCard(card.id)}
                >
                  x
                </button>
              </div>
              )}
              </Draggable>
            );
          })}
          {provided1.placeholder}
        </div>
        )}
        
        </Droppable>
        {/* </DragDropContext> */}
        <form onSubmit={handleSubmit}>
          <input
            className="mb-3 p-1"
            placeholder="Add a card"
            value={newCard}
            onChange={handleNewCardChange}
          />
          <button type="submit" className="d-none"></button>
        </form>
      </div>

    </div>

  );
};

export default Folder;

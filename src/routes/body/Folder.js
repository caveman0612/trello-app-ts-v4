import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard, deleteTodo, deleteCard } from "../../redux/todoSlice";

const Folder = ({ folder }) => {
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
    confirm && dispatch(deleteTodo({ id: folder.id }));
  }

  function handleDeleteCard(cardId) {
    dispatch(deleteCard({ folderId: folder.id, cardId }));
  }
  return (
    <div>
      <div className="card d-flex flex-column px-3 me-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="">{folder.title}</h2>
          <button
            style={{ height: "30px" }}
            className="btn-danger"
            onClick={handleDeleteFolder}
          >
            X
          </button>
        </div>

        <ul className="list-unstyled">
          {folder.cards.map((item) => {
            return (
              <li
                className=" border mb-2 p-1 ps-2 d-flex justify-content-between"
                key={item.id}
              >
                {item.title}
                <button
                  style={{ height: "20px", width: "20px" }}
                  className="btn-danger d-flex justify-content-center align-items-center"
                  onClick={() => handleDeleteCard(item.id)}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
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

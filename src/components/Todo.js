import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalISOpen] = useState(false);

  function deleteHandler() {
    setModalISOpen(true);
  }

  function closeModalHandler() {
    setModalISOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/*modalIsOpen ?      <Modal/ > : null
        if modal is true we render modal, else we dont output anything*/}
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {/*if you use && if both conditions are true second value will be returned*/}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;

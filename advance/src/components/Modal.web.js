import React from "react";
import Modal from "react-modal";
import { compose, setDisplayName } from "recompose";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

export default compose(setDisplayName("Modal"))(
  props =>
    console.log(props) || (
      <div>
        <button onClick={props.open}>Open Modal</button>
        <Modal isOpen={props.isOpen} style={customStyles}>
          {props.info}
          <button onClick={props.close}>close</button>
        </Modal>
      </div>
    )
);

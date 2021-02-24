import React from "react";
import "./modal.css";
import usePortal from "react-cool-portal";

function Modal1() {
  const { Portal, show, hide } = usePortal({
    defaultShow: false,
  });

  return (
    <div>
      {show()}
      <Portal>
        <div className="modal">
          <div className="modal-header">
            <h5 id="modal-label">The game is over for you ...</h5>
              <button className="close" onClick={hide()}>
                X
              </button>
          </div>
        </div>
      </Portal>
    </div>
  );
}

export default Modal1;

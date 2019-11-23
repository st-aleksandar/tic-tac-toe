import React from 'react';
import Popup from "reactjs-popup";

import './GameOverModal.css';


const GameOverModal = props => {

    const contentStyle = {
      color: '#333'
    }

    const modalStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const buttonSytle = {
      padding: "4px 8px",
      color: "#333",
      fontSize: '18px',
      cursor: 'pointer'
    }

    const closeButtoon = <button style={buttonSytle} className="close" onClick={props.closeHendler}>
    Play Again
  </button>;

    return (
        <div className="GameOver">
          <Popup 
            contentStyle={contentStyle}
            open={props.isShowingModal}
            closeOnDocumentClick={false}
            onClose={props.closeHendler}
            closeOnEscape={false}
            children={closeButtoon}
          >
            <div className="modal" style={modalStyle}>
              <div>{props.winner}</div>
              <h2>{props.text}</h2>
            </div>
            {closeButtoon}
          </Popup>
        </div>
    )
}

export default GameOverModal;
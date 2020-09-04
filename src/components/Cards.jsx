import React from 'react'
import Fade from "react-reveal/Fade";
import './card.css'


function Card(props) {
    return (
      <Fade top>
        <div className="card" style={{ background: "rgba(0, 0, 0, 0.1)" }}>
          <div className="overflow">
            <div
              className="card-image"
              style={{
                background: `url(${props.imgsrc}) center / cover`,
              }}
            >
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="card-link">Démo</button>
              </a>
            </div>
          </div>
          <div className="card-title">
            <h4>{props.title}</h4>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </Fade>
    );
}

export default Card

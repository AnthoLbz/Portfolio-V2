import React from 'react'
import Fade from "react-reveal/Fade";
import './card.css'


function Card(props) {
    return (
      <Fade top>
        <div className="card" style={{ background:"rgba(0, 0, 0, 0.6)" }}>
          <div className="overflow">
            <div className="card-image" style={{
                background: `url(${props.imgsrc}) center / cover`}}>
                <button className="card-link">Démo</button>
                </div>
          </div>
          <div className="card-title">
            <h4>{props.title}</h4>
            <p className="card-text">{props.text}</p>
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
            </a>
          </div>
        </div>
      </Fade>
    );
}

export default Card

import React, { useState } from "react";
import "./cv.css";
import monCV from "../images/CV-anthony lasbleiz Dev.pdf";
import Fade from "react-reveal/Fade";

const MonCV = () => {

  const [slideAction, setSlideAction]= useState(false);
  const card = document.getElementById("card");
  const reader = document.getElementById("reader");
  let active = false;
  let initialX;
  let timeStart, timeEnd;
  const soundAccepted = new Audio(
    "https://thomaspark.co/projects/among-us-card-swipe/audio/CardAccepted.mp3"
  );
  const soundDenied = new Audio(
    "https://thomaspark.co/projects/among-us-card-swipe/audio/CardDenied.mp3"
  );

  document.addEventListener("mousedown", dragStart);
  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchstart", dragStart);
  document.addEventListener("touchend", dragEnd);
  document.addEventListener("touchmove", drag);

  function dragStart(e) {
    if (e.target !== card) return;

    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX;
    } else {
      initialX = e.clientX;
    }

    timeStart = performance.now();
    card.classList.remove("slide");
    active = true;
  }

  function dragEnd(e) {
    if (!active) return;

    e.preventDefault();
    let x;
    let status;

    if (e.type === "touchend") {
      x = e.touches[0].clientX - initialX;
    } else {
      x = e.clientX - initialX;
    }

    if (x < reader.offsetWidth) {
      status = "invalid";
    }

    timeEnd = performance.now();
    card.classList.add("slide");
    active = false;

    setTranslate(0);
    setStatus(status);
  }

  function drag(e) {
    if (!active) return;

    e.preventDefault();
    let x;

    if (e.type === "touchmove") {
      x = e.touches[0].clientX - initialX;
    } else {
      x = e.clientX - initialX;
    }

    setTranslate(x);
  }

  function setTranslate(x) {
    if (x < 0) {
      x = 0;
    } else if (x > reader.offsetWidth) {
      x = reader.offsetWidth;
    }

    x -= card.offsetWidth / 2;

    card.style.transform = "translateX(" + x + "px)";
  }

  function setStatus(status) {
    if (typeof status === "undefined") {
      let duration = timeEnd - timeStart;

      if (duration > 700) {
        status = "slow";
      } else if (duration < 400) {
        status = "fast";
      } else {
        status = "valid";
      }
    }

    reader.dataset.status = status;
    playAudio(status);
    showCV(status);
  }

  function playAudio(status) {
    soundDenied.pause();
    soundAccepted.pause();
    soundDenied.currentTime = 0;
    soundAccepted.currentTime = 0;

    if (status === "valid") {
      soundAccepted.play();
    } else {
      soundDenied.play();
    }
  }

  function showCV(status) {
    if (status === "valid") {
      setSlideAction(true)
    } else {
      setSlideAction(false)
    }
  }
  return (
    <div>
      <p className="download-text">
        Passez votre carte pour télécharger mon CV !
      </p>
      <div id="wrapper">
        <div id="reader" data-status="">
          <div className="top">
            <div className="screen">
              <div id="message"></div>
            </div>
            <div className="lights">
              <div className="light red"></div>
              <div className="light green"></div>
            </div>
          </div>
          <div id="card">
            <div id="photo"></div>
          </div>
          <div className="bottom"></div>
          {slideAction ? (
            <Fade top>
              <a
                className="cv-button"
                href={monCV}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mon CV
              </a>
            </Fade>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MonCV;
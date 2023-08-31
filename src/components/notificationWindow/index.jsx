import React from "react";

import * as Ai from "react-icons/ai";

import * as C from "./styled";

export default function NotificationWindow(props) {
  return (
    <C.Container>
      <div className={props.state ? "notificationShow" : "notificationHide"}>
        <div className="centerWindow">
          {props.children}
          <article>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </article>
        </div>
        <button className="closeButton" onClick={props.stateFunction}>
          <Ai.AiOutlineClose className="icon" />
        </button>
      </div>
    </C.Container>
  );
}

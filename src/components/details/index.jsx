import { useState } from "react";

import * as Ai from "react-icons/ai";
import * as Fc from "react-icons/fc";
import * as Md from "react-icons/md";

import NotificationWindow from "../notificationWindow/index";

import * as C from "./styled";

export default function Details() {
  const [listOfTech, setLisOftTech] = useState(false);
  const [listOfMySocialNet, setListOfMySocialNet] = useState(false);
  const [email, setEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);

  const emailNotification = () => {
    setEmail(true);

    if (phoneNumber === true) {
      setPhoneNumber(false);
    }
  };

  const phoneNumberNotification = () => {
    setPhoneNumber(true);

    if (email === true) {
      setEmail(false);
    }
  };

  return (
    <C.Container>
      <NotificationWindow
        title="E-mail"
        state={email}
        stateFunction={() => setEmail(false)}
        description="melquisedeque.martins42@gmail.com"
      >
        <Ai.AiOutlineMail className="icon" />
      </NotificationWindow>
      <NotificationWindow
        title="WhatsApp"
        state={phoneNumber}
        stateFunction={() => setPhoneNumber(false)}
        description="+55 81 98183-1177"
      >
        <Ai.AiOutlineMail className="icon" />
      </NotificationWindow>
      <ul>
        <li>
          <a
            href="https://github.com/Melqui42/Verificador-de-Idade"
            target="_blank"
          >
            <Ai.AiFillGithub className="icon" />
          </a>
        </li>
        <li>
          <div>
            <button onClick={() => setLisOftTech(!listOfTech)}>
              {!listOfTech ? (
                <Fc.FcFolder className="icon" />
              ) : (
                <Fc.FcOpenedFolder />
              )}
            </button>
            <ul className={listOfTech ? "listOfTechShow" : "listOfTechHide"}>
              <li className="item">
                <div>
                  <img
                    src={require("../../assets/images/icons/reactJS.png")}
                    alt=""
                  />
                </div>
              </li>
              <li className="item">
                <div>
                  <img
                    src={require("../../assets/images/icons/javaScript.png")}
                    alt=""
                  />
                </div>
              </li>
              <li className="item">
                <div>
                  <img
                    src={require("../../assets/images/icons/styledComponents.png")}
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <button onClick={() => setListOfMySocialNet(!listOfMySocialNet)}>
              <Fc.FcBriefcase className="icon" />
            </button>
            <ul
              className={
                listOfMySocialNet
                  ? "listOfMySocialNetShow"
                  : "listOfMySocialNetHide"
              }
            >
              <li className="item">
                <a
                  href="https://www.linkedin.com/in/melquisedeque-martins-54108a25a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Ai.AiFillLinkedin />
                </a>
              </li>
              <li className="item">
                <a
                  href="https://github.com/Melqui42"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Ai.AiFillGithub />
                </a>
              </li>
              <li className="item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => phoneNumberNotification()}
                >
                  <Ai.AiOutlineWhatsApp />
                </a>
              </li>
              <li className="item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => emailNotification()}
                >
                  <Md.MdOutlineMail />
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </C.Container>
  );
}

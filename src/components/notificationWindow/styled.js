import styled, { css } from "styled-components";

export const baseStyledNotification = css`
  width: 350px;
  z-index: 1;
  position: fixed;
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-color: #21222c;
  border-left: 5px solid #12a87e;
  border-bottom: 3px solid #12a87e;
  border-radius: 0.5rem 0.2rem 0.2rem 0.5rem;

  .centerWindow {
    gap: 1rem;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;

    .icon {
      color: white;
      padding: 0.5rem;
      font-size: 1.4rem;
      border-radius: 100%;
      background-color: #029ff9;
    }

    article {
      h1 {
        color: white;
        font-size: 1.2rem;
      }

      p {
        color: white;
        font-size: 1rem;
      }
    }
  }

  .closeButton {
    top: 5px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.3rem;
    position: absolute;
    border-radius: 0.5rem;
    background-color: #474747;

    .icon {
      color: white;
    }

    &:hover {
      background-color: #e94242;
    }
  }
`;

export const Container = styled.div`
  .notificationShow {
    top: 50px;
    right: 50px;

    ${baseStyledNotification}
  }

  .notificationHide {
    top: 50px;
    right: -400px;

    ${baseStyledNotification}
  }

  @media (min-width: 320px) and (max-width: 437px) {
    .notificationShow {
      width: 300px;
      right: 10px;

      .center {
        article {
          h1 {
            color: white;
            font-size: 1rem;
          }

          p {
            color: white;
            font-size: 0.8rem;
          }
        }
      }
    }

    .notificationHide {
      width: 300px;

      .center {
        article {
          h1 {
            color: white;
            font-size: 1rem;
          }

          p {
            color: white;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

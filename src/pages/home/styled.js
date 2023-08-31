import styled, { css } from "styled-components";

const baseStyledCheckShow = css`
  width: 15px;
  height: 15px;
  position: absolute;
  position: relative;
  border-radius: 0.2rem;
  border: 3px solid #505253;

  .icon {
    display: none;
  }
`;

const baseStyledCheckSHide = css`
  width: 15px;
  height: 15px;
  position: absolute;
  position: relative;
  border-radius: 0.2rem;
  border: 3px solid #12a87e;

  .icon {
    top: -10px;
    left: -5px;
    color: #12a87e;
    font-size: 1.8rem;
    position: absolute;
  }
`;

export const Container = styled.div`
  gap: 6rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .centerContainer {
    gap: 2rem;
    display: flex;
    position: relative;
    flex-direction: column;

    .panel {
      position: relative;

      .title {
        top: -20px;
        left: 136px;
        font-size: 1.5rem;
        position: absolute;
        color: white;
        text-align: center;
        border-radius: 1rem;
        background-color: #6f73c6;
        padding: 0.2rem 2.2rem 0.2rem 2.2rem;
      }

      .center {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid #6f73c6;
        background-color: #21222c;
        padding: 3.5rem 2rem 1.5rem 3rem;
        border-radius: 0.5rem 0.5rem 0rem 0rem;

        .controls {
          gap: 2rem;
          display: flex;

          .inputYearOfBirth {
            label {
              gap: 1rem;
              color: white;
              display: flex;
              flex-direction: column;

              input {
                width: 175px;
                border: none;
                outline: none;
                padding: 0.5rem;
                border-radius: 0.2rem;
                border: 3px solid #6f73c6;
                background-color: "#EBEBEB";
              }
            }
          }

          .inputsRadios {
            gap: 1rem;
            display: flex;
            flex-direction: column;

            p {
              color: white;
            }

            .centerInputsRadios {
              gap: 2rem;
              display: flex;

              label {
                gap: 0.5rem;
                color: white;
                display: flex;
                position: relative;

                input {
                  z-index: 1;
                  opacity: 0;
                  cursor: pointer;
                }

                .checkMaShow,
                .checkFeShow {
                  ${baseStyledCheckShow}
                }

                .checkMaShow,
                .checkMaHide {
                  left: -24px;
                }

                .checkMaHide,
                .checkFeHide {
                  ${baseStyledCheckSHide}
                }

                .checkFeShow,
                .checkFeHide {
                  left: -24px;
                }
              }
            }
          }
        }

        .resultButton {
          width: 100%;
          border: none;
          cursor: pointer;
          padding: 0.4rem;
          transition: 0.3s;
          color: white;
          transition: 0.3s;
          margin-top: 1.5rem;
          font-weight: bold;
          background-color: #16a6f9;
          border-radius: 0.4rem;

          &:hover {
            background-color: #0491e3;
          }
        }
      }

      .welcomeMessage {
        width: 100%;
        display: flex;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        align-items: center;
        justify-content: center;
        background-color: #12a87e;
        border-radius: 0rem 0rem 1rem 1rem;

        p {
          color: white;
          font-weight: bold;
        }
      }
    }

    .content {
      gap: 2rem;
      display: flex;
      padding-top: 2rem;
      padding-bottom: 2rem;
      align-items: center;
      flex-direction: column;
      border: 1px solid #6f73c6;
      background-color: #21222c;
      border-radius: 0.5rem;

      .center {
        img {
          width: 200px;
          height: 150px;
          border-radius: 0.5rem;
        }
      }

      .result {
        width: 485px;
        border: none;
        cursor: pointer;
        padding: 0.2rem 0.4rem 0.2rem 0.4rem;
        transition: 0.3s;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        transition: 0.3s;
        font-weight: bold;
        background-color: #16a6f9;
        border-radius: 0.4rem;

        &:hover {
          background-color: #0491e3;
        }

        p {
          color: white;
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 830px;
    .centerContainer {
      .panel {
        width: 300px;

        .title {
          left: 40px;
          width: 165px;
          font-size: 1.1rem;
        }

        .center {
          .controls {
            flex-direction: column;

            .inputsRadios {
              .centerInputsRadios {
                flex-direction: column;
              }
            }
          }
        }

        .welcomeMessage {
          p {
            font-size: 0.7rem;
          }
        }
      }

      .content {
        width: 300px;

        .result {
          width: 216px;

          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

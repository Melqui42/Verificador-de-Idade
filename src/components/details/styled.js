import styled from "styled-components";

export const Container = styled.div`
  top: 0px;
  left: 600px;
  position: absolute;

  ul {
    gap: 1rem;
    display: flex;
    flex-direction: column;

    li {
      a,
      button {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        padding: 0.2rem;
        border: none;
        cursor: pointer;
        border-radius: 0.2rem;
      }

      div {
        position: relative;

        .listOfTechShow {
          top: 0px;
          left: 50px;
          display: flex;
          opacity: 1;
          transition: 0.3s;
          align-items: center;
          flex-direction: row;
          position: absolute;

          .item {
            div {
              img {
                width: 37px;
                border-radius: 0.2rem;
              }
            }

            &:nth-child(1) div {
              img {
                height: 37px;
                width: 42px;
              }
            }
          }
        }

        .listOfTechHide {
          top: 0px;
          left: 45px;
          opacity: 0;
          transition: 0.3s;
          display: flex;
          visibility: hidden;
          align-items: center;
          flex-direction: row;
          position: absolute;

          .item {
            div {
              img {
                width: 37px;
                border-radius: 0.2rem;
              }
            }

            &:nth-child(1) div {
              img {
                height: 37px;
                width: 42px;
              }
            }
          }
        }

        .listOfMySocialNetShow {
          top: 0px;
          left: 50px;
          display: flex;
          opacity: 1;
          transition: 0.3s;
          align-items: center;
          flex-direction: row;
          position: absolute;

          .item {
            a {
              cursor: pointer;
              font-size: 2rem;
              padding: 0.2rem;
              display: flex;
              align-items: center;
              border-radius: 0.2rem;
              justify-content: center;
            }

            &:nth-child(1) a {
              color: #029ff9;
              background-color: white;
            }

            &:nth-child(2) a {
              color: white;
              background-color: #3a3c3d;
            }

            &:nth-child(3) a {
              color: white;
              background-color: #10936e;
            }

            &:nth-child(4) a {
              color: #e94242;
              background-color: white;
            }
          }
        }

        .listOfMySocialNetHide {
          top: 0px;
          left: 45px;
          transition: 0.3s;
          opacity: 0;
          display: flex;
          visibility: hidden;
          align-items: center;
          flex-direction: row;
          position: absolute;

          .item {
            a {
              cursor: pointer;
              font-size: 2rem;
              padding: 0.2rem;
              display: flex;
              align-items: center;
              border-radius: 0.2rem;
              justify-content: center;
            }

            &:nth-child(1) a {
              color: #029ff9;
              background-color: white;
            }

            &:nth-child(2) a {
              color: white;
              background-color: #3a3c3d;
            }

            &:nth-child(3) a {
              color: white;
              background-color: #10936e;
            }

            &:nth-child(4) a {
              color: #e94242;
              background-color: white;
            }
          }
        }
      }

      &:nth-child(1) a {
        background-color: #3a3c3d;
      }

      &:nth-child(2) button {
        background-color: #029ff9;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    top: 670px;
    left: 70px;

    ul {
      top: 400px;
      right: 80px;
      flex-direction: row;

      li {
        div {
          .listOfTechShow {
            top: 50px;
            left: 19px;
            flex-direction: column;
            background-color: red;
          }

          .listOfTechHide {
            top: 40px;
            left: 19px;
            flex-direction: column;
            background-color: red;
          }

          .listOfMySocialNetShow {
            top: 50px;
            left: 19px;
            flex-direction: column;
            background-color: red;
          }

          .listOfMySocialNetHide {
            top: 40px;
            left: 19px;
            flex-direction: column;
            background-color: red;
          }
        }
      }
    }
  }
`;

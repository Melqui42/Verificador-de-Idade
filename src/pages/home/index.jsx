import React, { useState } from "react";

import * as Io5 from "react-icons/io5";

import Details from "../../components/details/index";

import boneco from "../../assets/images/others/boneco.png";

import childGirl from "../../assets/images/girlImages/imagemAdultaMenina.jpg";
import teenGirl from "../../assets/images/girlImages/imagemAdolescenteMenina.jpg";
import adultGirl from "../../assets/images/girlImages/imagemAdultaMenina.jpg";
import elderlyGirl from "../../assets/images/girlImages/imagemIdosaMenina.png";

import childBoy from "../../assets/images/boyImages/imagemCriançaMenino.jpg";
import teenBoy from "../../assets/images/boyImages/imagemAdolescenteMenino.jpg";
import adultBoy from "../../assets/images/boyImages/imagemAdultoMenino.jpg";
import elderlyBoy from "../../assets/images/boyImages/imagemIdosoMenino.jpg";

import * as C from "./styled";

export default function Home() {
  const [checkMa, setCheckMa] = useState(true);
  const [checkFe, setCheckFe] = useState(false);

  const [year, setYear] = useState("");

  const [description, setDescription] = useState("Resultado aqui");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState(false);
  const [image, setImage] = useState(boneco);

  function handlePersonInformation() {
    if (year >= 1900) {
      setAge(2023 - year);

      function sistemaDeVerificacao(
        childImage,
        teenImage,
        adultImage,
        elderlyImage
      ) {
        if (age >= 1 && age <= 12) {
          setImage(childImage);
          setDescription(`Você ainda é uma criança de ${age} anos.`);
        } else if (age >= 12 && age <= 20) {
          setImage(teenImage);
          setDescription(`Você ainda é um adolescente de ${age} anos.`);
        } else if (age >= 20 && age <= 65) {
          setImage(adultImage);
          setDescription(`Você ainda é um adulto de ${age} anos.`);
        } else if (age >= 65) {
          setImage(elderlyImage);
          setDescription(`Você ainda é um idoso de ${age} anos.`);
        }
      }

      if (sex === false) {
        sistemaDeVerificacao(childBoy, teenBoy, adultBoy, elderlyBoy);
      } else if (sex === true) {
        sistemaDeVerificacao(childGirl, teenGirl, adultGirl, elderlyGirl);
      }
    } else if (year === "") {
      window.alert("Insira um ano de nascimento.");
    }
  }

  const handleYearChange = (event) => {
    const newYear = event.target.value;
    if (newYear.length <= 4) {
      setYear(newYear);
    }
  };

  return (
    <C.Container>
      <div className="centerContainer">
        <Details />
        <div className="panel">
          <h1 className="title">Verificador de Idade</h1>
          <div className="center">
            <div className="controls">
              <div className="inputYearOfBirth">
                <label htmlFor="">
                  Ano de Nascimento:
                  <input
                    type="text"
                    value={year}
                    maxLength={4}
                    type="number"
                    onChange={(e) => handleYearChange(e)}
                    placeholder="Insira o ano que você nasceu"
                  />
                </label>
              </div>
              <div className="inputsRadios">
                <p>Sexo:</p>
                <div className="centerInputsRadios">
                  <div>
                    <label htmlFor="">
                      Masculino:
                      <input
                        type="radio"
                        name="sexo"
                        id=""
                        onClick={() => {
                          setCheckMa(true);
                          setCheckFe(false);
                        }}
                        value={sex}
                        defaultChecked
                        onChange={(e) => setSex(!sex)}
                      />
                      <div className={!checkMa ? "checkMaShow" : "checkMaHide"}>
                        {checkMa && <Io5.IoCheckmarkSharp className="icon" />}
                      </div>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      Feminino:
                      <input
                        type="radio"
                        name="sexo"
                        id=""
                        onClick={() => {
                          setCheckMa(false);
                          setCheckFe(true);
                        }}
                        value={sex}
                        onChange={(e) => setSex(!sex)}
                      />
                      <div className={!checkFe ? "checkFeShow" : "checkFeHide"}>
                        {checkFe && <Io5.IoCheckmarkSharp className="icon" />}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className="resultButton" onClick={handlePersonInformation}>
              Clique para ter o resultado
            </button>
          </div>
          <div className="welcomeMessage">
            <p>Seja bem-vindo(a) ao meu projeto!!!👋</p>
          </div>
        </div>
        <div className="content">
          <div className="center">
            <img src={image} alt="" />
          </div>
          <div className="result">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </C.Container>
  );
}

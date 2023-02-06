import React from "react";

import nada from "./Assets/nada.png"
import childGirl from "./Assets/Imagem-criança-menina.jpg";
import childBoy from "./Assets/Imagem-criança-menino.jpg";
import teenGirl from "./Assets/Imagem-adolescente-menina.jpg";
import teenBoy from "./Assets/Imagem-adolescente-menino.jpg";
import adultGirl from "./Assets/Imagem-adulta-menina.jpg";
import adultBoy from "./Assets/Imagem-adulto-menino.jpg";
import elderlyGirl from "./Assets/Imagem-idosa-menina.png";
import elderlyBoy from "./Assets/Imagem-idoso-menino.jpg";

import "./Style.scss";

export default function Home() {
  const [inputValue, setInputValue] = React.useState("");

  const [information, setInformation] = React.useState("Resultado aqui");
  const [age, setAge] = React.useState("");
  const [sex, setSex] = React.useState(false);
  const [image, setImage] = React.useState(nada);

  function handleInformacaoDaPessoa() {
    if (inputValue >= 1900) {
      setAge(2023 - inputValue);

      function sistemaDeVerificacao(childImage, teenImage, adultImage, elderlyImage) {
        if (age >= 1 && age <= 12) {
          setImage(childImage);
          setInformation(`Você ainda é uma criança de ${age} anos.`);
        } else if (age >= 12 && age <= 20) {
          setImage(teenImage);
          setInformation(`Você ainda é um adolescente de ${age} anos.`);
        } else if (age >= 20 && age <= 65) {
          setImage(adultImage);
          setInformation(`Você ainda é um adulto de ${age} anos.`);
        } else if (age >= 65) {
          setImage(elderlyImage);
          setInformation(`Você ainda é um idoso de ${age} anos.`);
        }
      }

      if (sex === false) {
        sistemaDeVerificacao(childBoy, teenBoy, adultBoy, elderlyBoy);
      } else if (sex === true) {
        sistemaDeVerificacao(childGirl, teenGirl, adultGirl, elderlyGirl);
      }
    } else if (inputValue === "") {
      window.alert("Insira um ano de nascimento.");
    }
  }

  return (
    <div className="App">
      <div className="Container">
        <h1>
          Verificador de idade (<span>React JS</span>)
        </h1>
        <div className="Content">
          <div className="Title">
            <label htmlFor="" className="InputValue">
              Ano de Nascimento:
              <input
                type="number"
                name=""
                id=""
                placeholder="Insira um valor..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <div className="InputsRadios">
              <p>Sexo:</p>
              <div className="Center">
                <div>
                  <label htmlFor="">
                    Masculino:
                    <input type="radio" name="sexo" id="" value={sex} defaultChecked onChange={(e) => setSex(!sex)} />
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    Feminino:
                    <input type="radio" name="sexo" id="" value={sex} onChange={(e) => setSex(!sex)} />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button onClick={handleInformacaoDaPessoa}>Clique</button>
          <div className="Imagem">
            <img src={image} alt="" />
          </div>

          <p>{information}</p>
        </div>
      </div>
    </div>
  );
}

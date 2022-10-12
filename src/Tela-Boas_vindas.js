import { useState } from "react";
import styled from "styled-components";

import decks from "./ListaDecks";

import logo from "./img/logo.png";

export default function BoasVindas(props) {
  const {
    setQuerAbrirODeck,
    setDeckSelecionado,
    deckSelecionado,
    metaDeZaps,
    setMetaDeZaps,
  } = props;

  const [osCamposEstaoPreenchidos, setOsCamposEstaoPreenchidos] =
    useState(false);
  const [msgDeValidaçaoMetaDeZaps, setMsgDeValidaçaoMetaDeZaps] = useState("");

  function selecionarDeck(e) {
    let itemSelecionado = e.target.value;

    switch (itemSelecionado) {
      case "React":
        setDeckSelecionado(decks.react);
        break;

      case "Naruto":
        setDeckSelecionado(decks.naruto);
        break;

      case "DragonBall":
        setDeckSelecionado(decks.dragonBallZ);
        break;
    }

    if (metaDeZaps !== "") {
      setOsCamposEstaoPreenchidos(true);
    }
  }

  function definirMetaZaps(e) {
    setMetaDeZaps(e.target.value);

    if (deckSelecionado !== null) {
      setOsCamposEstaoPreenchidos(true);
    }
  }

  function AbrirTelaDoDeck() {
    const aMetaEValida =
      metaDeZaps >= 1 && metaDeZaps <= deckSelecionado.length;

    if (!aMetaEValida) {
      setMsgDeValidaçaoMetaDeZaps(
        "Sua meta não pode ser 0 ou maior do que o tamanho do deck."
      );
    } else {
      setQuerAbrirODeck(true);
    }
  }

  return (
    <BemVindos osCamposEstaoPreenchidos={osCamposEstaoPreenchidos}>
      <figure>
        <img src={logo} />
        <figcaption>ZapRecall</figcaption>
      </figure>
      <select onChange={selecionarDeck} data-identifier="deck-selector">
        <option data-identifier="deck-option">Escolha seu Deck</option>
        <option value="React" data-identifier="deck-option">
          React
        </option>
        <option value="Naruto" data-identifier="deck-option">
          Naruto
        </option>
        <option value="DragonBall" data-identifier="deck-option">
          DragonBall Z
        </option>
      </select>

      <input
        type="number"
        placeholder="Digite sua meta de zaps..."
        onChange={definirMetaZaps}
        value={metaDeZaps}
        data-identifier="goals-input"
      />
      <MsgValidaçao>{msgDeValidaçaoMetaDeZaps}</MsgValidaçao>

      <button
        disabled={!osCamposEstaoPreenchidos}
        onClick={AbrirTelaDoDeck}
        data-identifier="start-btn"
      >
        Iniciar Recall!
      </button>
    </BemVindos>
  );
}

const BemVindos = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 136px;
    height: 161px;
  }

  figcaption {
    color: #ffffff;
    font-family: Righteous;
    font-weight: 400;
    font-size: 36px;
    margin: 20px 0 30px;
  }

  select {
    background: #ffffff;
    color: #adadad;
    width: 246px;
    height: 43px;
    margin-bottom: 18px;
    border-radius: 5px;
    border: none;
  }
  select:focus {
    outline: none;
  }

  input {
    background: #ffffff;
    color: #d70900;
    width: 246px;
    height: 43px;
    margin-bottom: 18px;
    font-family: Arial;
    font-weight: 400;
    font-size: 18px;
    border-radius: 5px;
    border: none;
  }
  input::placeholder {
    color: #adadad;
  }
  input:focus {
    outline: none;
  }

  button {
    background: ${({ osCamposEstaoPreenchidos }) =>
      osCamposEstaoPreenchidos ? "#ffffff" : "#E8E8E8"};
    color: ${({ osCamposEstaoPreenchidos }) =>
      osCamposEstaoPreenchidos ? "#d70900" : "#C0C0C0"};
    width: 246px;
    height: 54px;
    border: 1px solid #d70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
  }
`;

const MsgValidaçao = styled.p`
  color: white;
  width: 246px;
  margin: -13px 0 18px;
  font-size: 15px;
  font-family: "Recursive";
`;

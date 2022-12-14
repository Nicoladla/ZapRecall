import { useState } from "react";

import styled from "styled-components";

import iconeErro from "./img/icone_erro.png";
import iconeQuase from "./img/icone_quase.png";
import iconeCerto from "./img/icone_certo.png";

export default function Botoes(props) {
  const {
    indexFlashcardClicado,
    setIndexFlashcardClicado,
    flashcardsRespondidos,
    setFlashcardsRespondidos,
    setQuerMostraAResposta,
    querMostraAResposta,
    deckSelecionado,
    setContador,
    contador,
  } = props;

  const [numeroCardsRespondidos, setNumeroCardsRespondidos] = useState(0);

  function registrarFlashCardRespondido(status) {
    if (!querMostraAResposta) {
      return;
    }

    setContador({ ...contador, respostas: contador.respostas + 1 });

    let statusFlashcard = [...flashcardsRespondidos];

    if (status === "Não lembrei") {
      statusFlashcard[indexFlashcardClicado] = {
        cor: "#FF3030",
        icone: iconeErro,
      };
    } else if (status === "Quase não lembrei") {
      statusFlashcard[indexFlashcardClicado] = {
        cor: "#FF922E",
        icone: iconeQuase,
      };
    } else if (status === "Zap!") {
      statusFlashcard[indexFlashcardClicado] = {
        cor: "#2FBE34",
        icone: iconeCerto,
      };
      setContador({
        ...contador,
        zaps: contador.zaps + 1,
        respostas: contador.respostas + 1,
      });
    }

    setFlashcardsRespondidos(statusFlashcard);
    setNumeroCardsRespondidos(numeroCardsRespondidos + 1);
    setIndexFlashcardClicado(null);
    setQuerMostraAResposta(false);
  }

  return (
    <FooterConcluidos>
      <div>
        <button
          onClick={() => registrarFlashCardRespondido("Não lembrei")}
          data-identifier="forgot-btn"
        >
          Não lembrei
        </button>

        <button
          onClick={() => registrarFlashCardRespondido("Quase não lembrei")}
          data-identifier="almost-forgot-btn"
        >
          Quase não lembrei
        </button>

        <button
          onClick={() => registrarFlashCardRespondido("Zap!")}
          data-identifier="zap-btn"
        >
          Zap!
        </button>
      </div>

      <h2 data-identifier="flashcard-counter">
        {numeroCardsRespondidos}/{deckSelecionado.length} CONCLUÍDOS
      </h2>
    </FooterConcluidos>
  );
}

const FooterConcluidos = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }

  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 5px;
  }

  button:nth-child(1) {
    background: #ff3030;
  }
  button:nth-child(2) {
    background: #ff922e;
  }
  button:nth-child(3) {
    background: #2fbe34;
  }
`;

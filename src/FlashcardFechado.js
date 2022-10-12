import styled from "styled-components";

import setaPlay from "./img/seta_play.png";

export default function FlashcardFechado(props) {
  const {
    i,
    indexFlashcardClicado,
    setIndexFlashcardClicado,
    flashcardsRespondidos,
  } = props;

  let numerador = i + 1;
  const OflashcardFoiRespondido = flashcardsRespondidos[i] !== undefined;
  const corFlashcardRespodido = OflashcardFoiRespondido
    ? flashcardsRespondidos[i].cor
    : "#333333";

  function AbrirFlashcard() {
    if (indexFlashcardClicado !== null) {
      return;
    }

    if (!OflashcardFoiRespondido) {
      setIndexFlashcardClicado(i);
    }
  }

  return (
    <PerguntaFechada
      cor={corFlashcardRespodido}
      OflashcardFoiRespondido={OflashcardFoiRespondido}
      data-identifier="flashcard-index-item"
    >
      <p>Pergunta {numerador}</p>
      <img
        src={
          OflashcardFoiRespondido ? flashcardsRespondidos[i].icone : setaPlay
        }
        alt="Icone"
        onClick={AbrirFlashcard}
        data-identifier={
          OflashcardFoiRespondido ? "flashcard-status" : "flashcard-show-btn"
        }
      />
    </PerguntaFechada>
  );
}

const PerguntaFechada = styled.ul`
  width: 100%;
  height: 65px;
  background-color: #ffffff;
  margin: 12px 0;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: ${(props) =>
      props.OflashcardFoiRespondido ? "line-through" : "none"};
    color: ${(props) => props.cor};
  }
`;

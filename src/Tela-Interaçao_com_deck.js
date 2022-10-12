import { useState } from "react";

import styled from "styled-components";

import Logo from "./Logo";
import Deck from "./Deck";
import Botoes from "./Botoes";
import ResultadoMetaZaps from "./ResultadoMetaZaps";

export default function InteraçaoComDeck({ deckSelecionado, metaDeZaps }) {
  const [indexFlashcardClicado, setIndexFlashcardClicado] = useState(null);
  const [flashcardsRespondidos, setFlashcardsRespondidos] = useState([]);

  const [querMostraAResposta, setQuerMostraAResposta] = useState(false);

  const [contador, setContador] = useState({ zaps: 0, respostas: 0 });

  return (
    <TelaInteraçaoComDeck>
      {contador.respostas === deckSelecionado.length ? (
        <ResultadoMetaZaps
          contador={contador}
          setContador={setContador}
          metaDeZaps={Number(metaDeZaps)}
        />
      ) : (
        ""
      )}

      <Logo />
      <Deck
        indexFlashcardClicado={indexFlashcardClicado}
        setIndexFlashcardClicado={setIndexFlashcardClicado}
        flashcardsRespondidos={flashcardsRespondidos}
        setQuerMostraAResposta={setQuerMostraAResposta}
        querMostraAResposta={querMostraAResposta}
        deckSelecionado={deckSelecionado}
      />
      <Botoes
        indexFlashcardClicado={indexFlashcardClicado}
        setIndexFlashcardClicado={setIndexFlashcardClicado}
        flashcardsRespondidos={flashcardsRespondidos}
        setFlashcardsRespondidos={setFlashcardsRespondidos}
        setQuerMostraAResposta={setQuerMostraAResposta}
        querMostraAResposta={querMostraAResposta}
        deckSelecionado={deckSelecionado}
        contador={contador}
        setContador={setContador}
      />
    </TelaInteraçaoComDeck>
  );
}

const TelaInteraçaoComDeck = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 150px;
`;

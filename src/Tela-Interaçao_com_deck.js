import { useState } from "react";

import styled from 'styled-components';

import Logo from "./Logo"
import Deck from "./Deck"
import Botoes from "./Botoes"

export default function InteraçaoComDeck({deckSelecionado}) {

    const [indexFlashcardClicado, setIndexFlashcardClicado] = useState(null)
    const [flashcardsRespondidos, setFlashcardsRespondidos] = useState([])
    const [querMostraAResposta, setQuerMostraAResposta] = useState(false)

    return (
        <TelaInteraçaoComDeck>
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
            />
        </TelaInteraçaoComDeck>
    )
}

const TelaInteraçaoComDeck = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 150px;
`
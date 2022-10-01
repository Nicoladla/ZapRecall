import { useState } from "react";

import styled from 'styled-components';

import Logo from "./Logo"
import Deck from "./Deck"
import Botoes from "./Botoes"

export default function InteraçaoComDeck() {

    const [indexFlashcardClicado, setIndexFlashcardClicado] = useState(null)
    const [flashcardsRespondidos, setFlashcardsRespondidos] = useState([])
    //console.log(flashcardsRespondidos)
    //console.log(indexFlashcardClicado)

    return (
        <TelaInteraçaoComDeck>
            <Logo />
            <Deck
                indexFlashcardClicado={indexFlashcardClicado}
                setIndexFlashcardClicado={setIndexFlashcardClicado}
                flashcardsRespondidos={flashcardsRespondidos}
            />
            <Botoes
                indexFlashcardClicado={indexFlashcardClicado}
                setIndexFlashcardClicado={setIndexFlashcardClicado}
                flashcardsRespondidos={flashcardsRespondidos}
                setFlashcardsRespondidos={setFlashcardsRespondidos}
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
    padding-bottom: 200px;
`
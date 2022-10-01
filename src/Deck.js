import { useState } from "react";

import styled from 'styled-components';

import FlashcardFechado from "./FlashcardFechado";
import FlashcardAberto from "./FlashcardAberto";

export default function Deck({ indexFlashcardClicado, setIndexFlashcardClicado, flashcardsRespondidos }) {
    const deck = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
        { pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes " },
        { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ]

    return (
        <Ul>
            {deck.map((flashcard, i) =>
            (
                indexFlashcardClicado === i
                    ?
                    <FlashcardAberto flashcard={flashcard} key={i} />
                    :
                    <FlashcardFechado
                        i={i}
                        setIndexFlashcardClicado={setIndexFlashcardClicado}
                        flashcardsRespondidos={flashcardsRespondidos}
                        key={i}
                    />
            )
            )}
        </Ul>
    )
}

const Ul = styled.ul`
    width: 80%;
`
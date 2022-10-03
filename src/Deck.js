import styled from 'styled-components';

import FlashcardFechado from "./FlashcardFechado";
import FlashcardAberto from "./FlashcardAberto";

export default function Deck(props) {
    const {
        indexFlashcardClicado,
        setIndexFlashcardClicado,
        flashcardsRespondidos,
        querMostraAResposta,
        setQuerMostraAResposta,
        deckSelecionado
    } = props;


    return (
        <Ul>
            {deckSelecionado.map((flashcard, i) =>
            (
                indexFlashcardClicado === i
                    ?
                    <FlashcardAberto
                        flashcard={flashcard}
                        setQuerMostraAResposta={setQuerMostraAResposta}
                        querMostraAResposta={querMostraAResposta}
                        key={i}
                    />
                    :
                    <FlashcardFechado
                        i={i}
                        indexFlashcardClicado={indexFlashcardClicado}
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
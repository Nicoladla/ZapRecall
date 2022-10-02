import styled from 'styled-components';

import setaVirar from './img/seta_virar.png'

export default function FlashcardAberto({ flashcard, querMostraAResposta, setQuerMostraAResposta }) {

    return (
        <PerguntaAberta querMostraAResposta={querMostraAResposta} data-identifier="flashcard">
            <p data-identifier={querMostraAResposta ? "flashcard-answer" : "flashcard-question"}>
                {querMostraAResposta ? flashcard.resposta : flashcard.pergunta}
            </p>
            <img
                src={setaVirar}
                alt="Icone"
                onClick={() => setQuerMostraAResposta(true)}
                data-identifier="flashcard-turn-btn"
            />
        </PerguntaAberta>
    )
}

const PerguntaAberta = styled.li`
    width: 100%;
    margin: 12px 0;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        display: ${({ querMostraAResposta }) => querMostraAResposta ? "none" : "inline"};
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
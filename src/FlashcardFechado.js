import styled from 'styled-components';

import setaPlay from './img/seta_play.png'

export default function FlashcardFechado({ i, setIndexFlashcardClicado }) {
    let numerador= i+1;

    return (
        <PerguntaFechada >
            <p>Pergunta {numerador}</p>
            <img src={setaPlay} alt="Icone" onClick={() => setIndexFlashcardClicado(i)} />
        </PerguntaFechada>
    )
}

const PerguntaFechada = styled.ul`
    width: 100%;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px 0;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`
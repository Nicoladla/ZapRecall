import styled from 'styled-components';

import setaPlay from './img/seta_play.png'

export default function Deck() {
    const deck = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"]

    return (
        <Ul>
            {deck.map((pergunta, index) =>
                <PerguntaFechada key={index}>
                    <p>{pergunta}</p>
                    <img src={setaPlay} alt="Icone"/>
                </PerguntaFechada>
            )}
        </Ul>
    )
}

const Ul = styled.ul`
    width: 80%;
`

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

const PerguntaAberta= styled.li`
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
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
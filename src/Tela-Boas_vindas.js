import styled from "styled-components"

import logo from "./img/logo.png"

export default function BoasVindas({setQuerAbrirODeck}){
    return(
        <BemVindos>
            <figure>
                <img src={logo}/>
                <figcaption>ZapRecall</figcaption>
            </figure>
            <select name="oi">
                <option>Olaaa boy</option>
                <option>Olaaa gril</option>
                <option>chatoo</option>
            </select>
            <input type='number' placeholder="Digite sua meta de zaps..."/>
            <button onClick={() => setQuerAbrirODeck(true)}>
                Iniciar Recall!
            </button>
        </BemVindos>
    )
}

const BemVindos= styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    figure{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 136px;
        height: 161px;
    }

    figcaption{
        color: #FFFFFF;
        font-family: Righteous;
        font-weight: 400;
        font-size: 36px;
        margin: 20px 0 30px;
    }

    select{
        background: #FFFFFF;
        width: 246px;
        height: 43px;
        margin-bottom: 18px;
        border-radius: 5px;
        border: none;
    }
    select:focus{
        outline: none;
    }

    input{
        background: #FFFFFF;
        color: #D70900;
        width: 246px;
        height: 43px;
        margin-bottom: 18px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        border-radius: 5px;
        border: none;
    }
    input::placeholder{
        color: #ADADAD;
    }
    input:focus{
        outline: none;
    }

    button{
        background: #FFFFFF;
        color: #D70900;
        width: 246px;
        height: 54px;
        border: 1px solid #D70900;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
    }
`
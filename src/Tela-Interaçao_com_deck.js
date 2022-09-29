import { useState } from "react";

import styled from 'styled-components';

import Logo from "./Logo"
import Deck from "./Deck"
import Botoes from "./Botoes"

export default function InteraçaoComDeck(){
    return (
        <TelaInteraçaoComDeck>
            <Logo/>
            <Deck/>
            <Botoes/>
        </TelaInteraçaoComDeck>
    )
}

const TelaInteraçaoComDeck= styled.div`
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
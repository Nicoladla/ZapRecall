import { useState } from "react";

import GlobalStyle from "./GlobalStyles";

import Tela_BoasVindas from "./Tela-Boas_vindas"
import Tela_InteraçaoComDeck from "./Tela-Interaçao_com_deck"

export default function App() {

    const [querAbrirODeck, setQuerAbrirODeck] = useState(false)

    return (
        <>
            <GlobalStyle />

            {
                querAbrirODeck
                    ?
                    <Tela_InteraçaoComDeck />
                    :
                    <Tela_BoasVindas setQuerAbrirODeck={setQuerAbrirODeck} />
            }
        </>
    )
}
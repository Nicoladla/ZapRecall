import { useState } from "react";

import GlobalStyle from "./GlobalStyles";

import Tela_BoasVindas from "./Tela-Boas_vindas";
import Tela_InteraçaoComDeck from "./Tela-Interaçao_com_deck";

export default function App() {
  const [querAbrirODeck, setQuerAbrirODeck] = useState(false);
  const [deckSelecionado, setDeckSelecionado] = useState(null);
  const [metaDeZaps, setMetaDeZaps] = useState("");

  return (
    <>
      <GlobalStyle />

      {querAbrirODeck ? (
        <Tela_InteraçaoComDeck
          deckSelecionado={deckSelecionado}
          metaDeZaps={metaDeZaps}
        />
      ) : (
        <Tela_BoasVindas
          setQuerAbrirODeck={setQuerAbrirODeck}
          setDeckSelecionado={setDeckSelecionado}
          deckSelecionado={deckSelecionado}
          metaDeZaps={metaDeZaps}
          setMetaDeZaps={setMetaDeZaps}
        />
      )}
    </>
  );
}

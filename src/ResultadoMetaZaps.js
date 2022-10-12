import styled from "styled-components";

import imgResultadoBom from "./img/party.jpeg";
import imgResultadoRuim from "./img/sad.jpeg";
import IconeFechar from "./img/icone_erro.png";

export default function ResultadoMetaZaps(props) {
  const { contador, setContador, metaDeZaps } = props;

  function fecharExibiçãoDoResultado() {
    setContador({ ...contador, respostas: 0 });
  }

  return (
    <Resultado>
      <figure>
        <img
          src={IconeFechar}
          onClick={fecharExibiçãoDoResultado}
          alt="Icone"
        />

        <img
          src={contador.zaps >= metaDeZaps ? imgResultadoBom : imgResultadoRuim}
          alt="emoji"
        />
        <figcaption>
          {contador.zaps >= metaDeZaps
            ? "Parabéns você conseguiu. Zap!"
            : "Putz, não foi dessa vez!"}
        </figcaption>
      </figure>
    </Resultado>
  );
}

const Resultado = styled.aside`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  figure {
    background-color: white;
    width: 80%;
    min-height: 200px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  img:first-child {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  img:nth-child(2) {
    width: 100px;
  }
  figcaption {
    width: 90%;
    text-align: center;
    font-family: "Recursive";
    font-size: 20px;
  }
`;

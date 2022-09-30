import styled from 'styled-components';

export default function Botoes() {
    return (
        <FooterConcluidos>
            <div>
                <button>Não lembrei</button>

                <button>Quase não lembrei</button>

                <button>Zap!</button>
            </div>

            <h2>0/4 CONCLUÍDOS</h2>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

    div{
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }

    button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid transparent;
        padding:5px;
    }

    button:nth-child(1){
        background: #FF3030;
    }
    button:nth-child(2){
        background: #FF922E;
    }
    button:nth-child(3){
        background: #2FBE34;
    }
`
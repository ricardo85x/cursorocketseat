import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto; /* centered margin horizontal */

    h1 {
        font-size: 20px;
        display: flex;
        /* flex-direction: row; */
        align-items: center; /*  deixa o texto e o icone na mesma altura */

        svg {
            margin-right: 10px;
        }
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    /* flex-direction: row; */

    input {
        flex: 1; /* ocupa todo o tamando do container */
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;

        ${props =>
            props.notFound &&
            css`
                border: 1px solid red;
            `}
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #7159c1;
    border: 0;
    padding: 0px 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex; /*  os 3 styles para deixar o + do botao no centro humm ... */
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading &&
        css`
            /* css do import styled */
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const List = styled.div`
    list-style: none; /* tirar os bullets */
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        /* flex-direction: row; */
        justify-content: space-between;
        align-items: center; /*  mantem na mesma posicao vertical se tiver tamanho diferente */

        & + li {
            /* pega o li atual se tiver junto com outro li em anterior */
            border-top: 1px solid #eee;
        }

        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`;

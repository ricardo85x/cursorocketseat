import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: var(--my-color);
            color: #fff;
            padding: 12px 20px;
            border: 0;
            border-radius: 4px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: var(--my-color-dark);
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    button svg {
        color: var(--my-color);
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }

    tbody img {
        max-width: 100px;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            max-width: 50px;
            color: #666;
            padding: 4px;
        }
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline; /* alinha verticalmente na baseline */

    span {
        color: #888;
        font-weight: bolder;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;

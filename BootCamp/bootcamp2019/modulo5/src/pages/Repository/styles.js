import styled, { keyframes } from 'styled-components';

const rodaRodaRoda = keyframes`

    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }

`;

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    animation: ${rodaRodaRoda} infinite linear 2s;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueFilter = styled.div`
    margin-bottom: 10px;
`;

export const IssuesList = styled.div`
    padding-top: 30px;
    margin-top: 30px; /* adiconado para o border ficar no centro entre o padding item abaixo */
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }

        div {
            flex: 1; /* ocupa todo o espaco do container */
            margin-left: 15px;

            strong {
                font-size: 16px;

                a {
                    text-decoration: none;
                    color: #333;

                    &:hover {
                        color: #7159c1;
                    }
                }

                span {
                    background: #eee;
                    color: #333;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    padding-left: 3px 4px;
                    margin-left: 10px;
                    height: 20px;
                }
            }

            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;

export const IssuePagination = styled.div`
    display: flex;

    margin-top: 20px;
    align-content: center;
    align-items: center;
    flex-direction: row-reverse;

    button {
        padding: 5px;
        margin-left: 5px;
        border-radius: 5px;
    }

    button:first-child {
        order: 2;
    }

    span {
        color: #666;
        order: 3;
    }
`;

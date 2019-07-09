import styled from 'styled-components';

const Container = styled.div`
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

export default Container;

import styled from "styled-components";
import backgroundImg from "../../img/imfundo.jpg"

export const Container = styled.div `
    height: 100vh;

    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
`;

export const Form = styled.form `
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1{
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size: 48px;
    }

    > p{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 48px;
    }

    >h2{
        font-family: "Roboto slab";
        margin-bottom: 48px;
    }

    > a{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        margin-top: 120px;
    }
`;

export const BackgroundImg = styled.div `
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.4;
`;

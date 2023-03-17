import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: "Roboto";
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }
`;
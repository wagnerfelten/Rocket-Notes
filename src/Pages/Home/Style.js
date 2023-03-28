import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px;

    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

`;


export const Content = styled.div`

`;


export const Menu = styled.div`

`;


export const Search = styled.div`

`;


export const Newnotes = styled.div`

`;



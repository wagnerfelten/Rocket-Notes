import styled from "styled-components";

export const ContainerHeader = styled.header `
    grid-area: header;

    width: 100%;
    height: 105px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    background-color: black;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > img{
        width: 66px;
        height: 66px;
        border-radius: 50px;
    }

    > h3{
        color:  ${({theme}) => theme.COLORS.GRAY_100};
    }
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

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


`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;

    > img{
        width: 66px;
        height: 66px;
        border-radius: 50px;
    }

    > h3{
        color:  ${({theme}) => theme.COLORS.GRAY_100};
    }
`;

export const Logout = styled.div`
    display: flex;
    align-items: center;
    
    > img{
        width: 60px;
    }
    
`;
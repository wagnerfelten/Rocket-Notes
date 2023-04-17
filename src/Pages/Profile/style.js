import styled from "styled-components";

export const Container = styled.div `
    width: 100%;

    > header{
        width: 100%;
        height: 144px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;
    
        svg {
            font-size: 34px;
            color: white;
        }
    }

`;

export const Form = styled.form `
    width: 400px;
    
    display: flex;
    flex-direction: column;
    

    margin: 0 auto;

    > div:nth-child(4){
        margin-top: 24px;
   }
`;

export const Avatar = styled.div `
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px auto 30px;
   margin-top: -80px;
   position: relative;

  

   > img{
    width: 150px;
    border-radius: 50%;
   }

   > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 2px;
    right: 2px;

    
    
    cursor: pointer;

    input{
        display: none;
    }

    svg{
        width: 24px;
        height: 24px;
        color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    }
   }
`;
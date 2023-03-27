import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

`;

export const Links = styled.ul`
  margin-top: 12px;
  list-style: none;

  > li {
    margin-top: 12px;
  }
  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  width: 560px;
  margin: 0 auto;
  margin-top: 48px;


> button:first-child{
  align-self: end;
}


> h1{
    margin-top: 24px;
  }

  p{
    margin-top: 10px;
    text-align: justify;
    font-size: 16px;
  }
`;
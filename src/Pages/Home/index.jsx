 import { ContainerHome, Brand, Menu, Search, Content, Newnotes } from "./Style";

 import Header from "../../components/Header";
 import ButtonText from "../../components/ButtonText";

  function Home(){
    return(
        <ContainerHome>

        <Brand>
            <h1>Rockte Notes</h1>
        </Brand>
        
         <Header />

         <Menu>
            <ButtonText title="Todos"/>
            <ButtonText title="NodeJs" />
            <ButtonText title="ReactJs"/>
         </Menu>

         <Search>

         </Search>

         <Content>

         </Content>

         <Newnotes>
            
         </Newnotes>
        </ContainerHome>
    );
 };

 export default Home;
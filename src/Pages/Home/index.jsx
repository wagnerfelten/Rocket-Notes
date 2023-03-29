import { ContainerHome, Brand, Menu, Search, Content, Newnotes } from "./Style";
import sinalMais from "../../img/mais.svg"
import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";

function Home() {
  return (
    <ContainerHome>
      <Brand>
        <h1>Rockte Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive/>
        </li>
        <li>
          <ButtonText title="NodeJs" />
        </li>
        <li>
          <ButtonText title="ReactJs" />
        </li>
      </Menu>

      <Search></Search>

      <Content></Content>

      <Newnotes>
        <img src={sinalMais} />
        <h3>Criar notas</h3>
      </Newnotes>
    </ContainerHome>
  );
}

export default Home;

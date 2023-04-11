import { ContainerHome, Brand, Menu, Search, Content, Newnotes } from "./Style";

import sinalMais from "../../img/mais.svg";

import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Notes from "../../components/Notes";

function Home() {
  return (
    <ContainerHome>
      <Brand>
        <h1>Rockte Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="NodeJs" />
        </li>
        <li>
          <ButtonText title="ReactJs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titúlo" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Notes
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "Node" },
              ],
            }}
          />

          <Notes
            data={{
              title: "Node",
              tags: [
                { id: "1", name: "API" },
                { id: "2", name: "Express" },
              ],
            }}
          />
        </Section>
      </Content>

      <Newnotes>
        <img src={sinalMais} />
        <h3>Criar notas</h3>
      </Newnotes>
    </ContainerHome>
  );
}

export default Home;

import { Container, Links, Content } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Buttons";
import { Section } from "../../components/Section";
import Tags from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

function App() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </p>
          
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://google.com">google.com</a>
              </li>
              <li>
                <a href="https://youtube.com">youtube.com</a>
              </li>
              <li>
                <a href="https://github.com">github.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express" />
            <Tags title="nodejs" />
          </Section>

          <Button title="Enviar" loading />
        </Content>
      </main>
    </Container>
  );
}

export default App;

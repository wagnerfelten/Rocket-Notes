import { Container, Links } from "./styles";
import Header from "../components/Header";
import Button from "../components/Buttons";
import { Section } from "../components/Section";
import Tags from "../components/Tag";

function App() {
  return (
    <Container>
      <Header />

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
    </Container>
  );
}

export default App;

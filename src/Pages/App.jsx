import { Container, Links, Button1 } from "./styles";
import Header from "../components/Header";
import Button from "../components/Buttons";
import { Section } from "../components/Section";

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
        <Button1>
          <Button title="express"></Button>
          <Button title="nodejs"></Button>
        </Button1>
      </Section>

      <Button title="Enviar" loading />
    </Container>
  );
}

export default App;

import { Container } from "./styles";
import Button  from "../components/Buttons";

function App() {
  return (
    <Container>
      <h1>Hello word</h1>
      <Button title="Enviar" loading />
    </Container>
  );
}

export default App;

import { Container } from "./styles";
import Header from "../components/Header";
import Button  from "../components/Buttons";


function App() {
  return (
    <Container>
      <Header />
      <Button title="Enviar" loading />
    </Container>
  );
}

export default App;

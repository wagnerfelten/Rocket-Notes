import { Container, Form } from "./styled";

import { Link } from "react-router-dom";

import Textarea from "../../components/textarea";
import NoteItem from "../../components/NoteItem";
import Section from "../../components/Section";
import Button from "../../components/Buttons";
import Header from "../../components/Header";
import Input from "../../components/Input";


export default function NewTag() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Titúlo" />

          <Textarea placeholder="Observações" />
          <Input placeholder="Observacoes" />

          <Section title="Links úteis">
            <NoteItem value="https://google.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Enviar" />
        </Form>
      </main>
    </Container>
  );
}

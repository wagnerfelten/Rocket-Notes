import {Container, Form, BackgroundImg } from "./style";
import {FiMail, FiLock} from "react-icons/fi";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons"

export default function Singln() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Buttons title="Enter"/>

                <Link to="/register">Criar conta</Link>
            </Form>

            <BackgroundImg />
        </Container>
    );
}
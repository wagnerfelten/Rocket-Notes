import {Container, Form, BackgroundImg } from "./style";
import {FiMail, FiLock, FiUser} from "react-icons/fi";

import Input from "../../components/Input";
import Buttons from "../../components/Buttons"

export default function Singln() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

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

                <Buttons title="Cadastrar"/>

                <a href="#">Voltar Login</a>
            </Form>

            <BackgroundImg />
        </Container>
    );
}
import logoff from "../../img/sair.png";
import {ContainerHeader, Profile, Logout} from "./style";

function Header(){
    return(
        <ContainerHeader>
            <Profile>
                <img src="https://github.com/wagnerfelten.png" alt="foto do usuario" />
                <div>
                    <h3>Bem vindo</h3>
                    <h4>Wagner Rodrigues</h4>
                </div>
            </Profile>

            <Logout>
                <img src={logoff}></img>
            </Logout>
        </ContainerHeader>
    );
};

export default Header; 
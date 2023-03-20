import {ContainerHeader, Profile} from "./style";

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
        </ContainerHeader>
    );
};

export default Header; 
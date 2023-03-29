import { ContainerInput } from "./styled";

export default function Input({icon: Icon, ...rest}) {
    return(
        <ContainerInput>
            {Icon && <Icon />}
            <input {...rest} />
        </ContainerInput>
    );
}
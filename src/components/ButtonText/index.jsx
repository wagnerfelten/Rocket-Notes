import { ContainerText } from "./style";

export function ButtonText({title, ...rest}){
    return(
        <ContainerText type="button" {...rest}>
            {title}
        </ContainerText>
    );
};

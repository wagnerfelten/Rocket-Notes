import { ContainerText } from "./style";

export default function ButtonText({title, ...rest}){
    return(
        <ContainerText type="button" {...rest}>
            {title}
        </ContainerText>
    );
};

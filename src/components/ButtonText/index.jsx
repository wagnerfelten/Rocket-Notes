import { ContainerText } from "./style";

export default function ButtonText({title,isActive, ...rest}){
    return(
        <ContainerText type="button" isActive {...rest}>
            {title}
        </ContainerText>
    );
};

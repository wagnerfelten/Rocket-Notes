import { ContainerText } from "./style";

export default function ButtonText({title,isActive = false, ...rest}){
    return(
        <ContainerText type="button" isActive={isActive} {...rest}>
            {title}
        </ContainerText>
    );
};

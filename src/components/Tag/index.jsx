 import { ContainerTags } from "./style";
 
 function Tags({title, ...rest}){
    return(
        <ContainerTags {...rest}>
            {title}
        </ContainerTags>
    );
};

export default Tags;
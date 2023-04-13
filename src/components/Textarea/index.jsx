import {Container} from "./style";

export default function Textarea ({value, ...rest}){
    <Container {...rest}>
        {value}
    </Container>
}
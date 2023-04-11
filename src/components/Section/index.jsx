import {ContainerSection} from "./style";

export default function Section({title, children}){
    return (
        <ContainerSection>
            <h2>{title}</h2>
            {children}
        </ContainerSection>
    );
};
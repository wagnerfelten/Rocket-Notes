import {ContainerSection} from "./style";

export function Section({title, children}){
    return (
        <ContainerSection>
            <h2>{title}</h2>
            {children}
        </ContainerSection>
    );
};
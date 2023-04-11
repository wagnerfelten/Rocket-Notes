import { ContainerNote} from "./style";
import Tag from "../../components/Tag";

export default function Notes({data, ...rest}){
    return(
        <ContainerNote {...rest}>
             <h1>{data.title}</h1>

             {
                data.tags && <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.name} title={tag.name}/>)
                    }
                </footer>
             }
        </ContainerNote>
    );
};
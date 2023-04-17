import { ContainerButton } from "./style";

export default function Button({title, loading = false, ...rest}) {
  return (
    <ContainerButton type="button" disabled={loading} {...rest}>
        {loading ? "Carregando" : title}
    </ContainerButton>
  );
}

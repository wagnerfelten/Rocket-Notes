import { ContainerButton } from "./style";

function Button({title, loading = false, ...rest}) {
  return (
    <ContainerButton type="button" disabled={loading} {...rest}>
        {loading ? "Carregando" : title}
    </ContainerButton>
  );
}

export default Button

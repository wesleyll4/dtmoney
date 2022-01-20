import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <img src={logoImg} alt="dt money" />
      <button type="button">Nova transação</button>
    </Container>
  );
};

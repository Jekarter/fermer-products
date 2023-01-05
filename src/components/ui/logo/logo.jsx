import React from "react";
import { ReactComponent } from "../../../assets/logo.svg";
import { Text, StyledLogo } from "./styles.js";

function Logo() {
  return (
    <StyledLogo href="/">
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;

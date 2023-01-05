import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledSection, Copyright }  from "./styles.js";

function Footer() {
  return (
    <StyledSection>
      <Logo />
      <Copyright>Создано 2022</Copyright>
    </StyledSection>
  );
}

export default Footer;
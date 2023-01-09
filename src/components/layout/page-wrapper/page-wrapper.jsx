import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import { Main } from "./styles";

function PageWrapper({ features }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage features={features} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;

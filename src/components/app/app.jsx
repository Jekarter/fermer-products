import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles"
import features from "../../mocks/features"

export default function App() {
  return (
    <>
    <GlobalStyle />
      <PageWrapper features={features}>Контент страницы</PageWrapper>;
    </>
  );
}

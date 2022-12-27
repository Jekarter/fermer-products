import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import features from "../../mocks/features"

export default function App() {
  return <PageWrapper features={features} />;
}
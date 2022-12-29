import styled, { css } from "styled-components";

const gridList = css`
  margin-left: ${(props) => props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  margin-top: ${(props) => props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  font-size: 0;
  line-height: 0;
  text-align: ${(props) => props.$align || "center"};
`

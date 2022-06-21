import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  strong {
      font-weight: bold;
  }
  `;

export const Layout = styled.div`
  margin: 0 auto;
`;

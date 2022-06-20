import styled from "styled-components";

import { TextElemType } from "./index";

interface BaseProps {
  fontSize: number;
  tagName: TextElemType;
}

export const Base = styled.p<BaseProps>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize}px;
  ${({ tagName }) => {
    switch (tagName) {
      case "h1":
        return `
            font-weight: bold;
        `;
      case "h2":
        return `
            font-weight: bold;
        `;
      case "h3":
        return `
            font-weight: bold;
        `;
      case "h4":
        return `
            font-weight: 600;
        `;
      case "h5":
        return `
            font-weight: 500;
        `;
      case "p":
        return `
            font-weight: normal;
            letter-spacing: -1px;
        `;
      case "pre":
        return `
            font-weight: bold;
      `;
      default:
        return "";
    }
  }}
`;

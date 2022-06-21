import styled from "styled-components";

type TextElemType = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

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
            font-weight: bold;
        `;
      case "h5":
        return `
            font-weight: bold;
            color: rgba(58, 58, 58, 0.8);
            line-height: 22px;
        `;
      case "p":
        return `
            font-weight: normal;
            color:rgb(58, 58, 58);
            letter-spacing: -1px;
        `;
      case "span":
        return `
            font-weight: normal;
            color: rgba(58, 58, 58, 0.7);
      `;
      default:
        return "";
    }
  }}
`;

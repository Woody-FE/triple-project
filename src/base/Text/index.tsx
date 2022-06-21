import { PropsWithChildren } from "react";

import * as Styles from "./Text.styles";

export type TextElemType = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
type SizeList = "sm" | "nm" | "lg";

export interface TextProps {
  tagName?: TextElemType;
  size?: SizeList;
  customFontSize?: number;
}

function Text({
  tagName = "p",
  size = "nm",
  customFontSize,
  children,
}: PropsWithChildren<TextProps>) {
  const sizeMap: Record<SizeList, number> = {
    sm: 14,
    nm: 15,
    lg: 36,
  };
  const fontSize = customFontSize || sizeMap[size];
  return (
    <Styles.Base as={tagName} tagName={tagName} fontSize={fontSize}>
      {children}
    </Styles.Base>
  );
}

export default Text;

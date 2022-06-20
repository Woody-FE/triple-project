import { PropsWithChildren } from "react";

import { Base } from "./Text.styles";

export type TextElemType = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "pre";
type SizeList = "sm" | "nm" | "lg";

interface TextProps {
  tagName?: TextElemType;
  size?: SizeList;
  customFontSize?: number;
}

const Text = ({
  tagName = "p",
  size = "nm",
  customFontSize,
  children,
}: PropsWithChildren<TextProps>) => {
  const sizeMap: Record<SizeList, number> = {
    sm: 14,
    nm: 15,
    lg: 36,
  };
  const fontSize = customFontSize || sizeMap[size];
  return (
    <Base as={tagName} tagName={tagName} fontSize={fontSize}>
      {children}
    </Base>
  );
};

export default Text;

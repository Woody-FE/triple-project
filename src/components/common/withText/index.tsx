import { PropsWithChildren } from "react";

import { Text } from "@base/index";
import { TextProps } from "@base/Text";

const withText = ({ tagName, size, customFontSize }: TextProps) => {
  const TextComponent = ({ children }: PropsWithChildren) => {
    return (
      <Text tagName={tagName} customFontSize={customFontSize} size={size}>
        {children}
      </Text>
    );
  };
  return TextComponent;
};

export default withText;

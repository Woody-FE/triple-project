import { PropsWithChildren } from "react";

import Text, { TextProps } from "@base/Text";

function withText({ tagName, size, customFontSize }: TextProps) {
  const TextComponent = ({ children }: PropsWithChildren) => {
    return (
      <Text tagName={tagName} customFontSize={customFontSize} size={size}>
        {children}
      </Text>
    );
  };
  return TextComponent;
}

export default withText;

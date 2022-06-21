import * as Styles from "./Image.styles";

import google from "@images/badge-google.png";
import triple from "@images/triple.png";
import apple from "@images/badge-apple.png";

type ImageTypes = "triple" | "apple" | "google";

interface ImgIconProps {
  name: ImageTypes;
  width: number;
  height: number;
}

export const imageMap: Record<ImageTypes, string> = {
  triple,
  apple,
  google,
};

function Image({ name, width, height }: ImgIconProps) {
  return (
    <Styles.ImageContainer>
      <img src={imageMap[name]} width={width} height={height} alt={name} />
    </Styles.ImageContainer>
  );
}

export default Image;

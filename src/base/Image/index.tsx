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

// 이미지 태그를 활용할 때를 위해 제작
function Image({ name, width, height }: ImgIconProps) {
  return <img src={imageMap[name]} width={width} height={height} alt={name} />;
}

export default Image;

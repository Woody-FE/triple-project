import google from "@images/badge-google.png";
import triple from "@images/triple.png";
import apple from "@images/badge-apple.png";

type ImageTypes = "triple" | "apple" | "google";

interface ImgIconProps {
  name: ImageTypes;
  width: number;
  height: number;
}

const ImgIcon = ({ name, width, height }: ImgIconProps) => {
  const imageMap: Record<ImageTypes, string> = {
    triple,
    apple,
    google,
  };
  return <img src={imageMap[name]} width={width} height={height} alt={name} />;
};

export default ImgIcon;

import styled from "styled-components";

import { withText } from "@common/index";
import { imageMap } from "@base/Image";

export const LogoContent = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  text-align: center;
  background-size: 400px 338px;
  background-image: url(${imageMap.triple});
  background-repeat: no-repeat;
  padding-top: 280px;
`;

export const ContentText = withText({ tagName: "span", customFontSize: 15 });

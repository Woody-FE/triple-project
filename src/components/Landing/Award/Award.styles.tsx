import styled from "styled-components";

import { AwardProps } from ".";

export const AwardContent = styled.div<AwardProps>`
  height: 54px;
  padding: 5px 0px 5px 62px;
  white-space: pre-line;
  background-size: 54px 54px;
  background-image: url(${({ backgroundSrc }) => backgroundSrc});
  background-repeat: no-repeat;
  background-position: left top;
`;

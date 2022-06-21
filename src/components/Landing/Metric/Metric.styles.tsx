import styled from "styled-components";

import { withText } from "@common/index";

export const MetricText = withText({ tagName: "p", customFontSize: 36 });

export const MetricContent = styled.div`
  margin-bottom: 20px;
`;

import styled, { css, keyframes } from "styled-components";

import withText from "@common/withText";

interface AnimationTime {
  duration: number;
  delay: number;
  visible?: boolean;
}

interface AnimationTime {
  duration: number;
  delay: number;
  visible?: boolean;
}

interface CountAnimationTime extends Omit<AnimationTime, "visible"> {
  count: number;
}

const fadeInUp = keyframes`
0% {
  transform: translateY(10px);
  opacity: 0;
} 
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

const createChildrenAnimation = ({
  count,
  duration,
  delay,
}: CountAnimationTime) => {
  const styles = Array.from({ length: count }).reduce<string>((acc, _, i) => {
    acc += `
        & > div:nth-child(${i + 1}) {
          animation-duration: ${duration}ms;
          animation-delay: ${delay * i}ms;
          animation-fill-mode: forwards;
        }
      `;
    return acc;
  }, "");

  return css`
    ${styles}
  `;
};

export const SectionContainer = styled.section<AnimationTime>`
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  height: 552px;
  & > div {
    animation-name: ${fadeInUp};
    animation-play-state: ${({ visible }) => (visible ? "running" : "paused")};
    opacity: 0;
  }
  ${({ duration, delay }) =>
    createChildrenAnimation({ duration, delay, count: 3 })};
`;

export const MetricContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`;

export const AwardContainer = styled.div`
  display: flex;
  margin: 50px 0px 140px 623px;

  & > div {
    margin-right: 39px;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

export const AwardText = withText({ customFontSize: 14, tagName: "h5" });

import { useRef } from "react";

import * as Styles from "./AppInfomation.styles";

import Award from "@components/Landing/Award";
import { Metric, ContentLogo } from "@components/index";
import { useObserver } from "@hooks/index";
import { imageMap } from "@base/Image";

function AppInfomation() {
  const animationRef = useRef<HTMLElement>(null);

  // 해당 Dom이 화면에 일정부분 보일 시에 보인다는 값을 주어 그때부터 animation과 js값이 계산될 수 있도록 설계함
  const visible = useObserver(animationRef);

  return (
    <Styles.SectionContainer
      ref={animationRef}
      visible={visible}
      duration={700}
      delay={100}
    >
      <ContentLogo year={2019} month={2} />
      <Styles.MetricContainer>
        <Metric
          amountText="명"
          targetText="사용자"
          end={350}
          visible={visible}
        />
        <Metric amountText="개" targetText="리뷰" end={21} visible={visible} />
        <Metric amountText="개" targetText="저장" end={650} visible={visible} />
      </Styles.MetricContainer>
      <Styles.AwardContainer>
        <Award backgroundSrc={imageMap.google}>
          <Styles.AwardText>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </Styles.AwardText>
        </Award>
        <Award backgroundSrc={imageMap.apple}>
          <Styles.AwardText>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </Styles.AwardText>
        </Award>
      </Styles.AwardContainer>
    </Styles.SectionContainer>
  );
}

export default AppInfomation;

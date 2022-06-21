import { AppInfoItem, AppinfoText } from "./AppCount.styles";

import { CountUp } from "@common/index";

interface CountParams {
  end: number;
  amountText: string;
  targetText: string;
}

const AppCount = () => {
  const countList: CountParams[] = [
    {
      amountText: "명",
      targetText: "여행자",
      end: 700,
    },
    {
      amountText: "개",
      targetText: "여행 리뷰",
      end: 100,
    },
    {
      amountText: "개",
      targetText: "여행 일정",
      end: 470,
    },
  ];
  return (
    <section>
      {countList.map((countItem, idx) => {
        const { end, amountText, targetText } = countItem;
        return (
          <AppInfoItem key={`appInfo-${idx}`}>
            <AppinfoText>
              <strong>
                <CountUp end={end} />만 {amountText}
              </strong>
              의 {targetText}
            </AppinfoText>
          </AppInfoItem>
        );
      })}
    </section>
  );
};

export default AppCount;

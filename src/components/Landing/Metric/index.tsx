import * as Styles from "./Metric.styles";

import { CountUp } from "@common/index";

interface MetricProps {
  end: number;
  amountText: string;
  targetText: string;
  visible: boolean;
}

function Metric({ visible, amountText, targetText, end }: MetricProps) {
  return (
    <Styles.MetricContent>
      <Styles.MetricText>
        <strong>
          <CountUp visible={visible} end={end} />만 {amountText}
        </strong>
        의 {targetText}
      </Styles.MetricText>
    </Styles.MetricContent>
  );
}

export default Metric;

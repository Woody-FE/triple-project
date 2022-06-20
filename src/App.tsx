import { CountUp, Text } from "@components/common";

function App() {
  return (
    <div className="App">
      <Text customFontSize={36} tagName="p">
        <strong>
          <CountUp end={700} duration={2000} />만 명
        </strong>
        의 여행자
      </Text>
      <Text customFontSize={36} tagName="p">
        <strong>
          <CountUp end={100} duration={2000} />만 개
        </strong>
        의 여행 리뷰
      </Text>
      <Text customFontSize={36} tagName="p">
        <strong>
          <CountUp end={470} duration={2000} />만 개
        </strong>
        의 일정
      </Text>
    </div>
  );
}

export default App;

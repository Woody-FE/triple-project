import { useEffect, useRef, useState } from "react";

import { easeOutExpo } from "@utils/math";

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

/*
  start 지점을 받고, end 지점까지 duration 동안 변화하도록 기능 구현
  늦게 동작하고 싶을 시에 delay을 주면 해당 시간만큼 지연 후에 동작
*/
const CountUp = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
}: CountUpProps) => {
  const [count, setCount] = useState(start);
  const animationRef = useRef(0);
  const startRef = useRef(0);

  // 시작점이 있고 거기서부터 증가하게 하는 함수
  const calculateNextCount = (n: number) => {
    const gap = end - start;
    return start + gap * n;
  };

  const updateCount = (timestamp: number) => {
    if (!startRef.current) {
      startRef.current = timestamp;
    }
    const pastTime = timestamp - startRef.current;
    const progress = pastTime / duration;

    if (pastTime >= duration) {
      calculateNextCount(1);
      cancelAnimationFrame(animationRef.current);
      return;
    }

    const nextCount = calculateNextCount(easeOutExpo(progress));
    setCount(Math.ceil(nextCount));
    animationRef.current = requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    setTimeout(() => {
      requestAnimationFrame(updateCount);
    }, delay);

    // updateCount를 넣으면 무수히 많은 이벤트가 실행된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, duration, delay]);

  return <span>{count}</span>;
};

export default CountUp;

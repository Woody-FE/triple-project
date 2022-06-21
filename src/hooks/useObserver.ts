import { RefObject, useEffect, useState } from "react";

const useObserver = (elementRef: RefObject<Element>) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ref = elementRef?.current;
    const hasSupport = !!window.IntersectionObserver;

    if (hasSupport && ref) {
      const observer = new IntersectionObserver(
        ([entry]: IntersectionObserverEntry[]) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            setVisible(true);
            observer.unobserve(ref);
          }
        },
        {
          // 30퍼센트이상 화면에 들어왔을 시에 보이게 함
          threshold: 0.3,
        }
      );
      observer.observe(ref);
    }
  }, [elementRef]);
  return visible;
};

export default useObserver;

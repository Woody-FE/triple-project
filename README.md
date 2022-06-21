# Triple 과제

## 프로젝트 실행방법

1. `npm install`을 통해서 패키지를 설치합니다.
2. `yarn start`로 실행하고 `http://localhost:3000/`으로 접속합니다.

## 사용한 기술과 선택한 이유

### requestAnimationFrame

requestAnimationFrame에서 인자로 제공되는 timestamp를 통해서 60프레임에 가깝게 숫자가 증가하는 로직을 구현하였습니다. requestAnimationFrame를 사용할 경우, 브라우저가 렌더링할 수 있는 범주 내에서 실행되기 때문에 매끄러운 동작 연결이 가능합니다. 숫자가 증가폭이 선형이 아닌 베지에곡선의 형태를 띄고 있으므로 easing function을 활용하여 만들었습니다.

### IntersectionObserver

intersectionObserver의 경우는 해당 컴포넌트가 화면내로 진입하고 있는지 여부를 체크하여 애니메이션이 동작할 수 있도록 하기 위해 사용하였습니다. 이번 과제의 구현물은 섹션 하나였지만, 실제 트리플 서비스 내의 랜딩페이지의 경우 섹션이 여러개였고 화면에 진입을 할 때부터 애니메이션이 동작하도록 구현이 되어있었습니다. 따라서 화면 진입 여부를 판단하기 위해 IntersectionObserver를 사용하여 기능을 구현하였습니다.

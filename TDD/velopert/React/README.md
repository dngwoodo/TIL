#### Enzyme 과 react-testing-library 🫁
- React 공식문서에서 권장하는 라이브러리 - react-testing-library
대체 라이브러리 - Enzyme

#### 차이점 👣
- Enzyme
  - 테스트 코드를 작성할 때에는 컴포넌트의 내부 기능을 자주 접근
  - 컴포넌트가 지니고 있는 props, state을 확인하고, 컴포넌트의 내장 메서드를 직접 호출하기도 함
- react-testing-library
  - 렌더링 결과에 조금 더 집중
  - 실제 DOM에 신경을 많이 씀
  - 어떤 이벤트가 발생했을 때 화면에 원하는 변경이 생겼는지 확인하는 부분이 최적화되어 있음
  - 사용자 관점에서 테스팅하기에 용이
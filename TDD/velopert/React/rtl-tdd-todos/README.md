#### react-testing-library를 사용하여 테스팅 할 때 알아야 될 것

- 사용자가 된 입장으로 테스팅 한다고 생각하자.
  예를 들어 form과 같은 경우 이런 흐름으로 테스팅 한다.
  1. input 수정하기
  2. button 클릭하기
  3. onSubmit에 동작 과정 테스팅(클릭 된 뒤 form 컴포넌트에서 어떻게 동작되는 지를 테스팅 한다.)

#### 리팩토링

TodoItem.jsx가 todo가 바뀌지 않아도 리랜더링 되므로(부모가 리랜더링 되면 자식도 리랜더링 된다.) React.memo를 활용하여 최적화 해주어야 한다.<br/>
하지만 onToggle, onRemove 함수가 TodoApp.jsx에서 useCallback 두번째 deps의 todos에 의해서 계속 새로 만들어지므로 의미가 없다.<br/>
그래서 setTodo를 사용할때 () => 함수로 주면 두번째 deps는 [] 이렇게 비울 수 있기 때문에 React.memo를 사용할 수 있다.

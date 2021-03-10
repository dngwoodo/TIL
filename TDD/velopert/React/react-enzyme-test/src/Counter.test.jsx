import { shallow } from "enzyme/build";
import React from "react";
import Counter from "./Counter";

// shallow를 쓰게 되면 리액트 컴포넌트를 깊게 들어가지 않고 있는 그대로 출력해준다.
// shallow를 쓰게 되면 snap에 찍히는 최상위 태그가 div이다. mount는 <Counter></Counter>가 된다.
describe("<Counter />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("has initial number", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0); // state접근
  });

  it("increases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1); // state접근
  });

  it("decrease", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1); // state접근
  });

  // DOM 이벤트 시뮬레이트
  // 위에 처럼 직접 함수를 호출하는 것이 아니라 button을 눌러서 호출 해보자.
  it("calls handleIncrease", () => {
    // 클릭이벤트를 시뮬레이트하고, state 를 확인
    const wrapper = shallow(<Counter />);
    const plusButton = wrapper.findWhere((node) => {
      return node.type() === "button" && node.text() === "+1";
    }); // findWhere로 태그를 찾는다. 태그명은 button이고 태그 text는 +1 인 아이를 찾는다.

    plusButton.simulate("click"); // 버튼 클릭
    expect(wrapper.state().number).toBe(1);
  });

  it("calls handleDecrease", () => {
    // 클릭 이벤트를 시뮬레이트하고, h2 태그의 텍스트 확인
    const wrapper = shallow(<Counter />);
    const minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    ); // // findWhere로 태그를 찾는다. 태그명은 button이고 태그 text는 -1 인 아이를 찾는다.
    minusButton.simulate("click"); // 버튼 클릭
    const number = wrapper.find("h2"); // h2를 찾는다. 조건 없이 찾을때 find 사용
    expect(number.text()).toBe("-1");
  });
});

// input에 change를 주고 싶을 때 하는 방법이다.
// input.simulate('change', {
//   target: {
//     value: 'hello world'
//   }
// });

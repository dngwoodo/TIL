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
    expect(wrapper.state().number).toBe(0);
  });

  it("increases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });

  it("decrease", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
});

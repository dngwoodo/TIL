import { mount } from "enzyme/build";
import HookCounter from "./HookCounter";

// Hooks에서는 메서드 및 상태를 조회할 수 없다. 즉, 클래스에서 사용하는 wrapper.state() 는 사용하지 못한다.
// hooks에서는 꼭 mount를 사용해야 한다.
// 이유는 useEffect hook은 shallow에서 작동하지 않는다.
// 그리고 버튼 엘리먼트에 붙어 있는 함수가 이전 함수를 가르키고 있기 때문이다.
describe("<HookCounter />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("increases", () => {
    const wrapper = mount(<HookCounter />);
    const plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("2");
  });
  it("decreases", () => {
    const wrapper = mount(<HookCounter />);
    const decreaseButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    decreaseButton.simulate("click");
    decreaseButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-2");
  });
});

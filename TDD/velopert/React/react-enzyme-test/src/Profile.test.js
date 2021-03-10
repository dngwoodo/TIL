import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders username and name", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    // 컴포넌트 인스턴스에 접근 가능함.
    expect(wrapper.props().username).toBe("velopert");
    expect(wrapper.props().name).toBe("김민준");
  });
});

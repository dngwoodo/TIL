import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    // mount = 컴포넌트 렌더링
    // wrapper를 이용하여 추후 props 조회, DOM 조회, state 조회등을 할 수 있음
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    expect(wrapper).toMatchSnapshot(); // __snapshots__에 Profile.test.js.snap 파일 생성
  });
  it("renders username and name", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    // 컴포넌트 인스턴스에 접근 가능함.
    expect(wrapper.props().username).toBe("velopert");
    expect(wrapper.props().name).toBe("김민준");

    // DOM 조회
    const boldElement = wrapper.find("b");
    expect(boldElement.contains("velopert")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("김민준");
  });
});

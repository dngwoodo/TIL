import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <Profile username="vue만 하고 싶다" name="dongwoo"></Profile>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the props correctly", () => {
    const utils = render(<Profile username="vue만 하고 싶다" name="dongwoo" />);
    utils.getByText("vue만 하고 싶다"); // vue만 하고 싶다 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(dongwoo)"); // (김민준) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/dong/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});

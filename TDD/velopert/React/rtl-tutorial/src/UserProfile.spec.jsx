import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import axios from "axios";
import MockAdapter from "axios-mock-adapter"; // axios를 사용했을 때 요청이 발생하지 않지만 발생한 것처럼 작동하게 하기위해 사용하는 라이브러리이다.

describe("<UserProfile />", () => {
  // 이제 실제 서버에 요청이 도달하지 않고 여기서 정의한 가짜응답을 사용하게 된다.
  const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 가짜 딜레이 설정
  // API 요청에 대하여 응답 미리 정하기
  mock.onGet("https://jsonplaceholder.typicode.com/users/1").reply(200, {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  });
  it("calls getUser API loads userData properly", async () => {
    render(<UserProfile id={1} />);
    await screen.findByText("로딩중.."); // 로딩중.. 문구 보여줘야함
    await screen.findByText("Bret"); // Bret (username) 을 보여줘야함
    // screen.debug();
  });
});

// axios-mock-adapter 활용방법

// 1. 한번만 mocking 하기 - replyOnce
// mock.onGet('/users').replyOnce(200, users)

// 2. replyOnce 를 연달아서 사용하기
// mock
//   .onGet('/users')
//   .replyOnce(200, users) // 첫번째 요청
//   .onGet('/users')
//   .replyOnce(500); // 두번째 요청

// 3. 아무 요청이나 mocking 하기 - onAny()
// mock.onAny('/foo').reply(200); // POST, GET 이런것을 신경 쓰지 않음.

// 4. reset 과 restore
// mock.reset(); // reset 은 mock 인스턴스에 등록된 모든 mock 핸들러를 제거, 만약에 테스트 케이스별로 다른 mock 설정을 하고 싶다면 이 함수를 사용
// mock.restore(); // axios 에서 mocking 기능을 완전히 제거, 만약에 실제 테스트를 하다가 요청이 실제로 날라가게 하고 싶다면 이 함수를 사용

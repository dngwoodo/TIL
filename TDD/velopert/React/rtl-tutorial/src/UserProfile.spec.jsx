import React from "react";
import { render } from "react-testing-library";
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
  it("loads userData properly", () => {
    // TODO
  });
});

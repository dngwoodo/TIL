// https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started 정리

// AJAX(Asynchronous JavaScript And XML)
// 서버와 통신하기 위해 XMLHttpRequest객체를 사용하는 것
// 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성" 때문에 사용

// * 1단계 - HTTP request 만드는 방법
let httpRequest;
if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = function () {
  // 요청에 대한 상태가 변할 때 이 함수의 로직이 실행된다.
  // * 2단계 - 서버 응답에 대한 처리
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // ! readyState의 값의 의미
      // 0 (uninitialized) - (request가 초기화되지 않음)
      // 1 (loading) - (서버와의 연결이 성사됨)
      // 2 (loaded) - (서버가 request를 받음)
      // 3 (interactive) - (request(요청)을 처리하는 중)
      // 4 (complete) - (request에 대한 처리가 끝났으며 응답할 준비가 완료됨) <- 즉 httpRequest.readyState === 4 로 해도 무방
      console.log(httpRequest);
      console.log(httpRequest.status);
      console.log(httpRequest.response);

      // * 4단계 – 추가 예제 1 (XML response)
      const xmldoc = httpRequest.responseXML;
      const root_node = xmldoc.getElementsByTagName("root").item(0);
      alert(root_node.firstChild.data); // I'm a test
    }
  } catch (error) {
    console.error(error);
  }
};

// 서버에 요청 하는 법

// 데이터 요청 (method: 대문자, url, true: 비동기 or false: 동기)
httpRequest.open("GET", "test.xml", true);

// 헤더 설정 - POST 형식으로 데이터를 보내기 전에 MIME type을 먼저 설정해줘야 한다.(content-type 사용)
httpRequest.setRequestHeader("Accept", "application/json"); // 서버에 json형태로 달라고 말하는 헤더
httpRequest.setRequestHeader("Content-Type", "application/json"); // 보내는 데이터 형태가 json이라고 말하는 헤더

// method가 POST 일때 send 파라미터에 데이터를 넣어준다
httpRequest.send(null);

(function () {
  // https://ko.javascript.info/size-and-scroll

  const template = document.createElement("template");
  template.innerHTML = `
  <div class="item color-1">Block 1</div>
  <div class="item color-2">Block 2</div>
  <div class="item color-3">Block 3</div>
  <div class="item color-4">Block 4</div>
`;

  let timer;

  const handleScroll = () => {
    // 브라우저마다 스크롤이 없을 때 scrollHeight가 다른 값보다 작을 수 있기 때문에 가장 큰 스크롤 높이를 구하기 위해 이렇게 넣어준다.
    // scrollHeight = 전체 스크롤 높이
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight, // 전체 스크롤 높이
      document.body.offsetHeight,
      document.documentElement.offsetHeight, // 스크롤 사이즈를 포함한 눈에 보이는 해당 브라우저 페이지의 크기(패딩 포함, 보더 포함)
      document.body.clientHeight,
      document.documentElement.clientHeight // 스크롤을 사이즈를 포함하지 않은 눈에 보이는 해당 브라우저 페이지의 크기(패딩 포함, 보더 미포함)
    );

    // 스크롤 된 높이 + 스크롤 사이즈를 포함하지 않는 눈에 보이는 해당 브라우저 페이지 = 전체 스크롤에서 얼마만큼 내려 왔는지 파악하기 위한 것
    // scrollHeight - 300 = 전체 스크롤에서 300px위의 위치를 의미
    if (
      window.pageYOffset + document.documentElement.clientHeight >
      scrollHeight - 300
    ) {
      // https://javascript.info/template-element <- template 태그에 관한 설명
      // 여기에 원래 ajax 로직이 들어가게 되는데 scroll은 순식간에 엄청나게 많은 이벤트가 발생되기 때문에 한번 호출 된 후에 일정 시간 뒤에 요청을 해줄 필요가 있다.
      if (!timer) {
        timer = setTimeout(function () {
          timer = null;
          document.body.append(template.content.cloneNode(true));
        }, 1000);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
})();

// 스크롤 관련 정리
// document.documentElement.scrollTop vs window.pageYOffset vs window.scrollY
// scrollTop은 특정 요소에서 사용 가능 + IE9 미만 지원 <- V
// pageYoffset은 window에서 사용가능 + IE9 이상 지원 <- V
// window.scrollY IE지원 X
// V 된 것 둘중에 하나 사용하는 것이 좋다.
// https://stackoverflow.com/questions/22727751/window-pageyoffset-vs-document-documentelement-scrolltop

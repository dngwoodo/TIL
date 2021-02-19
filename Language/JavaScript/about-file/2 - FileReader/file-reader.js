const button = document.querySelector("button");
const image = document.querySelector("#targetImage");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  const input = document.createElement("input");

  input.type = "file";
  input.accept = "image/jpeg";
  input.click();
  input.onchange = function (e) {
    processFile(e.target.files[0]); // e.target.files에는 File객체들이 들어있다.
  };
});

function processFile(file) {
  console.log(file); // File
  const reader = new FileReader(); // file을 비동기적으로 읽기 위한 객체 생성(Blob, File객체를 이용하여 파일의 내용을 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줌)
  reader.readAsDataURL(file); // Blob이나 File을 읽고 그 파일을 base64로 인코딩해서 reader.result에 넣는다.
  console.log(reader);

  // 읽기 동작이 성공적으로 완료되었을 때마다 발생(비동기)
  reader.onload = function () {
    const result = reader.result;
    output.innerText = result;
    image.src = result; // 브라우저에서 base64를 디코딩해서 원래 데이터로 만들어준다.(네트워크 통신 X)
  };
}

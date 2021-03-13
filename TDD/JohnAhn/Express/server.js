// * module
import express from "express";

// * variable
const PORT = 5000;
// 기본 상식
// 127.0.0.1은 로컬 호스트를 의미함. 즉, 자깃 스스로를 가르키는 IP이다.
// 0.0.0.0 모든 IP를 의미함. 하지만 정확한 address를 할당하지 않으면 자신의 IP를 그 address로 지정하게 되서 로컬로 접근이 됨.
const HOST = "0.0.0.0";
const app = express();

// * middleware
app.use(express.json()); // axios로 넘어오는 값들을 json형태로 변형시켜줌.

// * router
app.get("/", (req, res) => {
  res.send("Hello World");
});

// * server open
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
}); // 해당 포트와 호스트에서 HTTP 서버를 시작

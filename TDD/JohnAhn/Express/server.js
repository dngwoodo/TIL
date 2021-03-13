// * module
import express from "express";
import router from "./routers/index.js";
import "./db.js";

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
app.use("/", router);
app.use((error, req, res, next) => {
  // 에러 라우터
  // 익스프레스에서는 비동기 작업이 오류가나면 서버가 망가지게 된다.
  // 그래서 비동기작업이 오류가 날 경우 반드시 next(errorMessage) 이렇게 해주어야 이 미들웨어로 안전하게 오게 된다.
  // 중간에 있는 미들웨어는 전부 무시하고 바로 이쪽으로 온다.
  res.status(500).json({ message: error.message });
});

// * server open
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
}); // 해당 포트와 호스트에서 HTTP 서버를 시작

export default app;

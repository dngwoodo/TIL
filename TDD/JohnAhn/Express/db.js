import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// * connect DB
// 사이트에서 connect > Connect your application > Add your connection string into your application code 카피
// password는 처음에 설정해주었던 것, dbname은 아무거나
// 사이트에서 collection에서 dbname에서 내 collection 데이터 확인 가능
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb Connected..."))
  .catch(console.error);

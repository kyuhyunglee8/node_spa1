const express = require('express');
const app = express();

const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments.js")

const connect = require("./schemas");
connect();

const port = process.env.PORT || 3000

app.use(express.json());
app.use("/api", postRouter);
app.use("/api", commentRouter);

app.listen(port, () => {
  console.log(port, '서버 실행');
});
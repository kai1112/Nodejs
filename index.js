// sử dụng require để nó đi vào thư mục node modules để tải dữ liệu
const express = require("express");
const app = express();
// địa chỉ của trang web khi bạn muốn chạy nó lên
const port = 3000;

// route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// địa chỉ ip trên máy là 127.0.0.1 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

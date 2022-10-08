const express = require("express");
const app = express();
const port = process.env.port || 3000;
require("./router")(app);
app.get("/", (req, res) => {
  res.send({
    name: "hello",
  });
});

app.listen(port, () => {
  console.log(`Success run in http://localhost:${port}`);
});

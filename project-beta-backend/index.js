const express = require("express");
const app = express();


app.post("/post", (req, res) => {
  console.log("Connected to React");
  console.log(req);
  res.redirect('/');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

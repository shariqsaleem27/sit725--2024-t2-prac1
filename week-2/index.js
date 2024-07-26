const express = require('express');
const app = express();
const port = 3000;

function calSum(a, b) {
  return Number(a) + Number(b);
}

function calSub(a, b) {
  return Number(a) - Number(b);
}

app.get('/add', function(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const ans = calSum(a, b);
  res.send(ans.toString());
});

app.get('/sub', function(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const ans = calSub(a, b);
  res.send(ans.toString());
});

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

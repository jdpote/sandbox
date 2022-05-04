const express = require("express");
const morgan = require("morgan");
const bp = require("body-parser");

const lib = require("./lib");

const { urlencoded, json } = bp;

const db = {
  todos: [],
};

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));

app.get("/todo", (req, res) => {
  res.json({ data: db.todos });
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  const newTodo = { complete: false, id: Date.now(), text: req.body.text };
  db.todos.push(newTodo);

  res.json({ data: newTodo });
});

app.get("/user", async (req, res) => {
  const user = await lib.getNewUser(1);
  // return user using lib mobule
  return res.json({ user });
});

app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About me</h1> <p>Muhsin Altıntop is aspiring web developer </p>"
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1> <p>email: muhsin.altintop@gmail.com</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

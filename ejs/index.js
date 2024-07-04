import express from "express";
const app = express();

app.set("views", "src/views/");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/home", (req, res) => {
  res.render("pages/home");
});

app.get("/cek-turnitin", (req, res) => {
    res.render("pages/cek-turnitin/cek-turnitin.ejs");
  });


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

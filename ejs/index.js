import express from "express";
const app = express();

app.set("views", "src/views/");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/cek-turnitin", (req, res) => {
  res.render("pages/cek-turnitin/cek-turnitin.ejs");
});

app.get("/parafrase-in", (req, res) => {
  res.render("pages/parafrase-in/parafrase-in.ejs");
});

app.get("/translate-in", (req, res) => {
  res.render("pages/translate-in/translate-in.ejs");
});

app.get("/sarang-freelance", (req, res) => {
  res.render("pages/sarang-freelance/sarang-freelance.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

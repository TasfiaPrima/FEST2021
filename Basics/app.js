const express = require("express");
const userRoutes = require("./routes/userRoutes.routes");
const app = express();

app.get("/",(req,res)=>{
    res.send("<H1>Home Page</H1>");
});

module.exports=app;
// const { logger, printSomething } = require("./middlewares/app.middleware");
// const morgan = require("morgan");
// //to call a middleware always from any routes
// app.use([logger, printSomething]);

// //built in middleware
// app.use(express.static("public"));

// //3rd party middleware
// app.use(morgan("tiny"));

// app.use("/users/", express.static("public"), userRoutes);

// app.get("/", logger, (req, res) => {
//   res.sendFile("home.html", { root: "./views" });
// });
// app.post("/", (req, res) => {
//   res.send("<h1>hi</h1>");
// });

// app.get("/about", (req, res) => {
//   res.cookie("username", "asd");
//   // res.clearCookie("username")
//   res.append("key", "boo");
//   res.status(201).send("<h1>about</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.json({ name: "asd", hobby: "sleep" });
//   res.status(201).send("<h1>contact</h1>");
// });

// app.use((req, res) => {
//   res.status(401).send("<h1>page not found</h1>");
// });

// module.exports = app;
require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/users");
const mailRouter = require("./routes/mail");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build"))); */
/* app.use(cors()); */

/* a
 */
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./Client/build")));

app.use("/users", usersRouter);
app.use("/", mailRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Client/build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

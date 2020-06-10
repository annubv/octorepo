const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

//server static assests in production
if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8080;
app.set("port", port);

app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});

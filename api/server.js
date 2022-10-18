const path = require("node:path");
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const port = 6969;
//
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "cms"));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const app = express();
app.use(connectLivereload());
//
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static("cms"));
app.get("/api", (req, res) => {
  res.send({ message: "Sup!" });
});

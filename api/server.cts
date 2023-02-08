const path = require("path");
const fs = require("fs");
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
//
// Typical routes
app.get("/", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "../cms/index.html"));
});
app.get("/posts/*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "../cms/post.html"));
});
//
// API routes
app.use(express.static(path.join(__dirname, "dist")));
const router = express.Router();
const postsPath = path.join(__dirname, "./data.json");
const getPosts = (req: any, res: any) => {
  console.log(":: ~ getPosts postsPath", postsPath);
  const posts = JSON.parse(fs.readFileSync(postsPath).toString());
  console.log(":: ~ getPosts posts", posts);
  return res.json(posts);
};
// const getSchema = (req: any, res: any) => {
//   const schema = JSON.parse(
//     fs.readFileSync(path.join(__dirname, "../public/schema.json"))
//   );
//   return res.json(schema);
// };
// const getPost = (req: any, res: any) => {
//   const posts = JSON.parse(fs.readFileSync(postsPath));
//   return res.json(posts[parseInt(req.params.i)]);
// };
const createPost = (req: any, res: any) => {
  console.log("::createPost", req, res);
};
const updatePost = (req: any, res: any) => {
  console.log("::updatePost", req, res);
};
const deletePost = (req: any, res: any) => {
  console.log("::deletePost", req, res);
};
app.use("/api", router);
// router.get("/schema", getSchema);
router.get("/posts", getPosts);
// router.get("/posts/:i", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
// router.delete("/posts/:id", deletePost);

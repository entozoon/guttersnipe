#! /usr/bin/env node
import { parseInterface } from "parse-interface";
import { cwd } from "./util.cjs";
const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const port = 1338;
if (cwd.includes("node_modules")) {
  throw new Error(
    "Use from project directory, not directly within node_modules"
  );
}
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(`${cwd}/cms`);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const app = express();
app.use(cors());
app.use(connectLivereload());
//
app.listen(port, () => console.log(`Listening on port ${port}`));
//
// Typical routes
app.get("/", (req: any, res: any) => {
  res.sendFile(`${cwd}/../cms/index.html`);
});
//
// API routes
app.use(express.static(`${cwd}/dist`));
const router = express.Router();
//
const getFilenames = (req: any, res: any) => {
  const files = fs.readdirSync(cwd) || [];
  return res.json(
    files.filter(
      (file: string) =>
        file.endsWith(".json") &&
        !file.endsWith(".schema.json") &&
        // filter package.json and other typical baddies
        !["package.json", "package-lock.json"].includes(file)
    )
  );
};
const getFile = (req: any, res: any) => {
  const filename = req.params.filename;
  console.log(":: ~ getFile", filename);
  const buffer = fs.readFileSync(`${cwd}/${filename}`);
  const contents = JSON.parse(buffer.toString());
  return res.json(contents);
};
const getSchema = (req: any, res: any) => {
  const filename = req.params.filename.replace(/\.json$/, ".schema.json");
  return getFile({ params: { filename } }, res);
};
// const postsPath = `${cwd}/data.json`;
// const getPosts = (req: any, res: any) => {
//   // http://localhost:6969/api/posts
//   console.log(":: ~ getPosts postsPath", postsPath);
//   const posts = JSON.parse(fs.readFileSync(postsPath).toString());
//   console.log(":: ~ getPosts posts", posts);
//   return res.json(posts);
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
router.get("/getFilenames", getFilenames);
router.get("/getFile/:filename", getFile);
router.get("/getSchema/:filename", getSchema);
// router.get("/posts", getPosts);
// router.get("/posts/:i", getPost);
// router.post("/posts", createPost);
// router.put("/posts/:id", updatePost);
// router.delete("/posts/:id", deletePost);

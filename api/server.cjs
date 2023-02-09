"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const path = require("path");
const fs = require("fs");
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const port = 6969;
//
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(`${util_1.cwd}/cms`);
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
app.get("/", (req, res) => {
    res.sendFile(`${util_1.cwd}/../cms/index.html`);
});
app.get("/posts/*", (req, res) => {
    res.sendFile(`${util_1.cwd}/../cms/post.html`);
});
//
// API routes
app.use(express.static(`${util_1.cwd}/dist`));
const router = express.Router();
const postsPath = `${util_1.cwd}/data.json`;
const getPosts = (req, res) => {
    console.log(":: ~ getPosts postsPath", postsPath);
    const posts = JSON.parse(fs.readFileSync(postsPath).toString());
    console.log(":: ~ getPosts posts", posts);
    return res.json(posts);
};
// const getSchema = (req: any, res: any) => {
//   const schema = JSON.parse(
//     fs.readFileSync(`${cwd}/../public/schema.json`))
//   );
//   return res.json(schema);
// };
// const getPost = (req: any, res: any) => {
//   const posts = JSON.parse(fs.readFileSync(postsPath));
//   return res.json(posts[parseInt(req.params.i)]);
// };
const createPost = (req, res) => {
    console.log("::createPost", req, res);
};
const updatePost = (req, res) => {
    console.log("::updatePost", req, res);
};
const deletePost = (req, res) => {
    console.log("::deletePost", req, res);
};
app.use("/api", router);
// router.get("/schema", getSchema);
// http://localhost:6969/api/posts
router.get("/posts", getPosts);
// router.get("/posts/:i", getPost);
// router.post("/posts", createPost);
// router.put("/posts/:id", updatePost);
// router.delete("/posts/:id", deletePost);

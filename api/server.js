import * as path from "path";
import * as fs from "fs";
import * as express from "express";
import * as livereload from "livereload";
import * as connectLivereload from "connect-livereload";
// const path = require("node:path");
// const fs = require("node:fs");
// const express = require("express");
// const livereload = require("livereload");
// const connectLivereload = require("connect-livereload");
var port = 6969;
//
var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "cms"));
liveReloadServer.server.once("connection", function () {
    setTimeout(function () {
        liveReloadServer.refresh("/");
    }, 100);
});
var app = express();
app.use(connectLivereload());
//
app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
//
// Typical routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../cms/index.html"));
});
app.get("/posts/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../cms/post.html"));
});
//
// API routes
app.use(express.static(path.join(__dirname, "dist")));
var router = express.Router();
var postsPath = path.join(__dirname, "./data.json");
var getPosts = function (req, res) {
    console.log(":: ~ getPosts postsPath", postsPath);
    var posts = JSON.parse(fs.readFileSync(postsPath).toString());
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
var createPost = function (req, res) {
    console.log("::createPost", req, res);
};
var updatePost = function (req, res) {
    console.log("::updatePost", req, res);
};
var deletePost = function (req, res) {
    console.log("::deletePost", req, res);
};
app.use("/api", router);
// router.get("/schema", getSchema);
router.get("/posts", getPosts);
// router.get("/posts/:i", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
// router.delete("/posts/:id", deletePost);

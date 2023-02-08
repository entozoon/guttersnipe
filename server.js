"use strict";
exports.__esModule = true;
var node_path_1 = require("node:path");
var node_fs_1 = require("node:fs");
var express_1 = require("express");
var livereload_1 = require("livereload");
var connect_livereload_1 = require("connect-livereload");
var port = 6969;
//
var liveReloadServer = livereload_1["default"].createServer();
liveReloadServer.watch(node_path_1["default"].join(__dirname, "cms"));
liveReloadServer.server.once("connection", function () {
    setTimeout(function () {
        liveReloadServer.refresh("/");
    }, 100);
});
var app = (0, express_1["default"])();
app.use((0, connect_livereload_1["default"])());
//
app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
//
// Typical routes
app.get("/", function (req, res) {
    res.sendFile(node_path_1["default"].join(__dirname, "../cms/index.html"));
});
app.get("/posts/*", function (req, res) {
    res.sendFile(node_path_1["default"].join(__dirname, "../cms/post.html"));
});
//
// API routes
app.use(express_1["default"].static(node_path_1["default"].join(__dirname, "dist")));
var router = express_1["default"].Router();
var postsPath = node_path_1["default"].join(__dirname, "../public/posts.json");
var getPosts = function (req, res) {
    var posts = JSON.parse(node_fs_1["default"].readFileSync(postsPath));
    return res.json(posts);
};
var getSchema = function (req, res) {
    var schema = JSON.parse(node_fs_1["default"].readFileSync(node_path_1["default"].join(__dirname, "../public/schema.json")));
    return res.json(schema);
};
var getPost = function (req, res) {
    var posts = JSON.parse(node_fs_1["default"].readFileSync(postsPath));
    return res.json(posts[parseInt(req.params.i)]);
};
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
router.get("/schema", getSchema);
router.get("/posts", getPosts);
router.get("/posts/:i", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
// router.delete("/posts/:id", deletePost);

"use strict";
exports.__esModule = true;
var vite_1 = require("vite");
var preset_vite_1 = require("@preact/preset-vite");
// https://vitejs.dev/config/
exports["default"] = (0, vite_1.defineConfig)({
    plugins: [(0, preset_vite_1["default"])()]
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cwd = exports.forwardSlashes = void 0;
const forwardSlashes = (string) => string.replace(/\\\\/g, "/").replace(/\\/g, "/");
exports.forwardSlashes = forwardSlashes;
// Get the project dir, with unix style line endings
exports.cwd = (0, exports.forwardSlashes)(process.cwd());

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = __importDefault(require("jsonfile"));
const moment_1 = __importDefault(require("moment"));
const simple_git_1 = __importDefault(require("simple-git"));
const FILE_PATH = './data.json';
const DATE = (0, moment_1.default)().format();
const data = {
    date: DATE
};
jsonfile_1.default.writeFile(FILE_PATH, data);
// this line actually is ``` git commit --date="" ```
(0, simple_git_1.default)().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push();

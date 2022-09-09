"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = __importDefault(require("jsonfile"));
const moment_1 = __importDefault(require("moment"));
const simple_git_1 = __importDefault(require("simple-git"));
const FILE_PATH = './data.json';
for (let i = 1; i < 365; ++i) {
    const DATE = (0, moment_1.default)().subtract(1, 'd').format();
    const data = {
        date: DATE
    };
    jsonfile_1.default.writeFile(FILE_PATH, data, () => {
        (0, simple_git_1.default)().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push()
            .then(() => console.log("pushed"))
            .catch(err => { console.log(err); });
    });
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var articles_1 = __importDefault(require("./handler/articles"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
var corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200 // some legacy browsers(IE11, various...)
};
app.use((0, cors_1["default"])(corsOptions));
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
(0, articles_1["default"])(app);
//text:allow to use middle ware
// middle ware: run between req and res
app.get('/test-cors', (0, cors_1["default"])(corsOptions), function (req, res, next) {
    res.json({ msg: 'this is cors-enabled with a middle ware' });
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});

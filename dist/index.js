"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors/cors");
const mongo_config_1 = require("./config/db/mongo.config");
const passport_1 = __importDefault(require("passport"));
const passport_config_1 = require("./config/passport/passport.config");
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const env_config_1 = require("./config/envs/env.config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(cors_2.corsConfig));
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)(env_config_1.envs.COOKIE_SECRETKEY));
app.use(express_1.default.json());
(0, passport_config_1.initializePassport)();
app.use(passport_1.default.initialize());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use("/", index_routes_1.default);
app.get("/greeting", (req, res) => {
    res.send({ Greet: "Hello" });
});
(0, mongo_config_1.connectDB)();
app.listen(env_config_1.envs.PORT, () => {
    console.log(`rest api funcionando en el puerto ${env_config_1.envs.PORT}`);
});

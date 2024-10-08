"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const CustomError_1 = require("./CustomError");
class BadRequestError extends CustomError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.StatusCode = 400;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serialize() {
        return { status: "error", payload: this.message };
    }
}
exports.BadRequestError = BadRequestError;

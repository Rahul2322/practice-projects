"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const common_routes_1 = require("../routes/common_routes");
const test_routes_1 = require("../routes/test_routes");
const user_routes_1 = require("../routes/user_routes");
const environment_1 = require("../environment");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.test_routes = new test_routes_1.TestRoutes();
        this.user_routes = new user_routes_1.UserRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetUp();
        this.test_routes.route(this.app);
        this.user_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(express.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }));
    }
    mongoSetUp() {
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;

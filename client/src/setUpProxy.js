// NOTE: setupProxy cannot be written in TypeScript

/* eslint-disable */
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy(
            [
                // API
                "/v1",

                // social auth endpoints
                "/auth"
            ],
            {
                target: "http://localhost:3001/"
            }
        )
    );
};

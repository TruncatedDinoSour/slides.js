// This serves a live HTTP server for development

const liveServer = require("live-server");

var params = {
    file: "tests/index.html",
};

liveServer.start(params);

"use strict";

var express = require('express');

var app = express();

var tasks = require('./routes/tasks');

var connectDB = require('./db/connect');

require('dotenv').config(); // middleware


app.use(express["static"]('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
var port = 3000;

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connectDB(process.env.MONGO_URI));

        case 3:
          app.listen(port, console.log("server is running on port ".concat(port)));
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

start();
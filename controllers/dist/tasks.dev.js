"use strict";

var Task = require("../models/task");

var getAllTasks = function getAllTasks(req, res) {
  var tasks;
  return regeneratorRuntime.async(function getAllTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Task.find({}));

        case 3:
          tasks = _context.sent;
          res.status(200).json({
            tasks: tasks
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            msg: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var createTask = function createTask(req, res) {
  var task;
  return regeneratorRuntime.async(function createTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Task.create(req.body));

        case 3:
          task = _context2.sent;
          res.status(201).json({
            task: task
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            msg: _context2.t0
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getTask = function getTask(req, res) {
  var taskID, task;
  return regeneratorRuntime.async(function getTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          taskID = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Task.findOne({
            _id: taskID
          }));

        case 4:
          task = _context3.sent;

          if (task) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            msg: "No task with id: ".concat(taskID)
          }));

        case 7:
          res.status(200).json({
            task: task
          });
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            msg: _context3.t0
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var updateTask = function updateTask(req, res) {
  var taskID, task;
  return regeneratorRuntime.async(function updateTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          taskID = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Task.findOneAndUpdate({
            _id: taskID
          }, req.body, {
            "new": true,
            runValidators: true
          }));

        case 4:
          task = _context4.sent;

          if (task) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            msg: "No task with id: ".concat(taskID)
          }));

        case 7:
          res.status(200).json({
            task: task
          });
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            msg: _context4.t0
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var deleteTask = function deleteTask(req, res) {
  var taskID, task;
  return regeneratorRuntime.async(function deleteTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          try {
            taskID = req.params.id;
            task = Task.findOneAndDelete({
              _id: taskID
            });
            /* if (!task) {
              return res.status(404).json({ msg: `No task with id : ${taskID}` });
            } */

            res.status(200).json({
              task: task
            });
          } catch (error) {// res.status(500).json({ msg: error });
          }

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
};

module.exports = {
  getAllTasks: getAllTasks,
  createTask: createTask,
  getTask: getTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};
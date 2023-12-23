// Create web server for comment
var express = require('express');
var router = express.Router();
var comments = require('../models/comments');
var users = require('../models/users');
var ObjectId = require('mongoose').Types.ObjectId;
var auth = require('../auth');
var check = auth.check;
var checkAdmin = auth.checkAdmin;
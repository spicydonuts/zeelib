"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// some dom things
var scrollTop = exports.scrollTop = function scrollTop() {
  return global.scrollTo(0, 0);
};

var getWidth = exports.getWidth = function getWidth() {
  return global.innerWidth || global.document.documentElement.clientWidth;
};

var getHeight = exports.getHeight = function getHeight() {
  return global.innerHeight || global.document.documentElement.clientHeight;
};

var getScrollBarWidth = exports.getScrollBarWidth = function getScrollBarWidth() {
  return global.innerWidth - global.document.documentElement.clientWidth;
};
(function (window, document) {
  'use strict';

  function DOM(elements) {
    if (!(this instanceof DOM)) {
      return new DOM(elements);
    }
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get(index) {
    if (!index) {
      return this.element[0];
    }
    return this.element[index];
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.isArray = function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

  DOM.isObject = function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  };

  DOM.isFunction = function isFunction(arg) {
    return Object.prototype.toString.call(arg) === '[object Function]';
  };

  DOM.isNumber = function isNumber(arg) {
    return Object.prototype.toString.call(arg) === '[object Number]';
  };

  DOM.isString = function isString(arg) {
    return Object.prototype.toString.call(arg) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(arg) {
    return Object.prototype.toString.call(arg) === '[object Boolean]';
  };

  DOM.isNull = function isNull(arg) {
    return (
      Object.prototype.toString.call(arg) === '[object Null]' ||
      Object.prototype.toString.call(arg) === '[object Undefined]'
    );
  };

  window.DOM = DOM;
})(window, document);

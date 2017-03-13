"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by arthuranderson on 3/13/17.
 */

var Node = require("bg-single-node");

var Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this.head = null;
    }

    _createClass(Stack, [{
        key: "push",
        value: function push(obj) {
            this.head = Node.insert(this.head, obj);
        }
    }, {
        key: "pop",
        value: function pop() {
            var retval = this.head;
            this.head = Node.remove(this.head, this.head.data);
            return retval.data;
        }
    }, {
        key: "empty",
        value: function empty() {
            return this.head === null;
        }
    }]);

    return Stack;
}();

module.exports = Stack;
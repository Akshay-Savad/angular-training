"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// passing array to function
function arrayFunction(nos) {
    for (var _i = 0, nos_1 = nos; _i < nos_1.length; _i++) {
        var a = nos_1[_i];
        console.log(a);
    }
}
arrayFunction([10, 11, 12, 13]);
// spread operator 
var arr1 = [1, 2, 3];
var arr2 = ['akshay', 'aniketh'];
var arr1 = __spreadArray(__spreadArray([], arr1, true), [arr1], false);
console.log(arr1);
// spread operator with objects
var obj1 = {
    "name": "akshay",
    "roll": 19
};
var obj2 = __assign(__assign({}, obj1), { "location": "San Francesco" });
var obj3 = { obj1: obj1, "location": "San Francesco" };
console.log(obj2, obj3);
// Enum
var AccountType;
(function (AccountType) {
    AccountType["curr"] = "Current Account";
    AccountType["savi"] = "Savings Account";
    AccountType["jt"] = "Joint Account";
    AccountType[AccountType["temp"] = 4] = "temp";
    AccountType[AccountType["temp1"] = 4] = "temp1";
})(AccountType || (AccountType = {}));
console.log(AccountType);

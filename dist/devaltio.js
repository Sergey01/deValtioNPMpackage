"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSnapshot = exports.proxy = void 0;
// @ts-ignore  
const valtio_1 = require("valtio");
const sendToDeValtio = ((_a = window.__deValtio) === null || _a === void 0 ? void 0 : _a.postMessage) || function () { };
const proxy = (...params) => {
    const newValtioProxy = (0, valtio_1.proxy)(...params);
    sendToDeValtio('newProxy', JSON.stringify(newValtioProxy));
    return newValtioProxy;
};
exports.proxy = proxy;
const useSnapshot = (...params) => {
    const newValtioSnapshot = (0, valtio_1.useSnapshot)(...params);
    sendToDeValtio('newSnapshot', JSON.stringify(newValtioSnapshot));
    return newValtioSnapshot;
};
exports.useSnapshot = useSnapshot;

export const selector = (element) => document.querySelector(element);
export const selectorAll = (element) => document.querySelectorAll(element);
export const eventHandler = ($, event, callback) => $.addEventListener(event, callback);
export const log = (value) => console.log(value);
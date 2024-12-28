// select a single element
export const selector = (element) => document.querySelector(element);

// select multiple elements
export const selectorAll = (element) => document.querySelectorAll(element);

// event
export const eventHandler = ($, event, callback) =>
  $.addEventListener(event, callback);

export const log = (value) => console.log(value);
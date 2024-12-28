/**
 * Create a debounce function
 *
 * @function debounce
 * @description : returns a function that will not fire immediately if the user fires a handler event
 * @param { function } fn: function to invoked
 * @param { number } wait: time in "n" seconds or milliseconds to stop an execution
 * @param { number } immediate: time in "n" milliseconds to be invoked
 * @returns { function } returns a debounced function
 * @example
 * const log = debounce(console.log, 500)
 * log("Hello") // will run after a 500 milliseconds
 */

export function debounce(fn, wait, immediate) {
  let timer;
  const later = () => {
    let context = this;
    if (!immediate) fn.apply(context, arguments);
  };

  return (...args) => {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(later, wait);

    const callNow = immediate && !timer;
    if (callNow) fn.apply(context, args);
  };
}
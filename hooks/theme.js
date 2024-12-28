import { selector } from "../modules/custom_functions.js";
import { selectorAll } from "../modules/custom_functions.js";
import { eventHandler } from "../modules/custom_functions.js";

export const handleDarkMode = (
  dark,
  active,
  [dataset, main, mode, inactive]
) => {
  const htmlRefs = {
    toggleDarkMode: selector(`${dataset}`),
    container: selector(`${main}`),
    modeElement: selectorAll(`${mode}`),
    inactiveElement: selectorAll(`${inactive}`),
  };

  const { toggleDarkMode, container, modeElement, inactiveElement } = htmlRefs;

  eventHandler(toggleDarkMode, "click", () => {
    container.classList.toggle(`${dark}`);

    modeElement.forEach((mode) => mode.classList.toggle(`${dark}`));
    inactiveElement.forEach((inactive) =>
      inactive.classList.toggle(`${active}`)
    );

    const storage = (key, value) => localStorage.setItem(key, value);

    container.classList.contains(`${dark}`)
      ? storage("theme", "true")
      : storage("theme", "false");
  });

  const darkMode = (key, value) => {
    const localTheme = localStorage.getItem(key);

    if (localTheme === value) {
      container.classList.add(`${dark}`);

      modeElement.forEach((mode) => mode.classList.add(`${dark}`));
      inactiveElement.forEach((inactive) =>
        inactive.classList.add(`${active}`)
      );
    } else {
      container.classList.remove(`${dark}`);

      modeElement.forEach((mode) => mode.classList.remove(`${dark}`));
      inactiveElement.forEach((inactive) =>
        inactive.classList.remove(`${active}`)
      );
    }
  };

  darkMode("theme", "true");
};
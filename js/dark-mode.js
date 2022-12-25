function getDarkMode(mode){
  const darkModeButton = document.querySelector(`[data-mode="${mode}"]`);
  const body = document.querySelector('body');
  const darkSwitch = `<img src="./assets/icons/toggle-dark-mode.svg" alt="toggle dark"/>`
  const lightSwitch = `<img src="./assets/icons/toggle-light-mode.svg" alt="toggle light"/>`

  darkModeButton.addEventListener('click', handleClick);

  function handleClick(){
    if(darkModeButton.classList.contains('dark--mode')){
      darkModeButton.classList.remove('dark--mode');
      body.classList.remove('active');
      darkModeButton.innerHTML = lightSwitch;
    }else {
      darkModeButton.classList.add('dark--mode');
      body.classList.add('active');
      darkModeButton.innerHTML = darkSwitch;
    }
  }
}

getDarkMode('light-mode')
# Custom HTML 5 Video Project

**Files root:**

- :file_folder: assets
  |--- :file_folder: icons
  |--- :file_folder: images
- :file_folder: css
  |--- :page_facing_up: index.css
- :file_folder: js
  |--- :page_facing_up: index.js
- :file_folder: video
  |--- :video_camera: 
- :page_facing_up: .gitignore
- :page_facing_up: index.html
- :page_facing_up: README.md

1. We initialize this repo updating our html file with the following snippet code.

```html
  <div class='container'>
    <div class="dark--mode__container">
      <button class="light--mode" data-mode="light-mode" aria-describedby="light and dark mode toggle" role="button">
        <img src="./assets/icons/toggle-light-mode.svg" alt="light mode toggle">
      </button>
    </div>
    <div class="player--container" data-player="player" role="main">
      <div class="video--container" data-video-container="container">
          <video class="video" src="./video/chosen.mp4" poster="./assets/images/poster.jpg"></video>
      </div>
    </div>
  </div>
```

**Working with styles to mobile phone.**

2. We use **_SASS_** or **_SCSS_** as a preprossesor to work more effecently with **CSS**.

The **_HTML_**, **_SCSS_** and **_JS_** code, you can find them ~~on my github account~~ from this repository.

**Snippet code.**

```scss
  .figure--container {
    max-width: 45rem;
    padding-inline: 1rem;
    margin: 0;

    .hidden {
      position: relative;
      overflow: hidden;

      &:hover .controls {
        bottom: .25rem;
        transition: bottom .5s ease-in
      }

      .controls {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        gap: .5rem;
        align-content: center;
        justify-items: center;

        width: $size;
        height: 4rem;
        position: absolute;
        bottom: -3.7rem;
        background-color: rgba(0,0,0,.75);
        transition: bottom .5s ease-out;
      }
    }
  }
```

**JS Code**
*Dark Mode*

```js
  function getDarkMode(mode){
    const darkButton = document.querySelector(`[data-mode="${mode}"]`);
    const body = document.querySelector('body');
    const darkSwitch = `<img src='../assets/icons/toggle-dark-mode.svg' alt='Dark button'/>`
    const lightSwitch = `<img src='../assets/icons/toggle-dark-mode.svg' alt='Light button'/>`

    darkButton.addEventListener('click', handleClick)
    
    function handleClick(){
      if(darkButton.classList.contains('dark--mode')){
        darkButton.classList.remove('dark--mode')
        body.classList.remove('active');
      }else {
        darkButton.classList.add('dark--mode')
        body.classList.add('active');
      }
    }
  }

  getDarkMode('light-mode)
```

### What is dark mode?

Dark mode is the ability to switch from light to dark on a screen or a website, changing its background, according to a particular situation.

<figure>
  <img width='400px' src='./assets/images/dark-mode.png' alt='Dark mode image'/>
  <figcaption>
    <p>Image taken from <a href='https://www.hp.com'>www.hp.com - What is dark mode</a></p>
  </figcaption>
</figure>

More information about **DARK MODE**, visit the following sites:

- [What is Dark Mode](https://www.hp.com)
- [prefers color scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [A complete guide to dark mode on the web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)



~~Follow my github account [dponcez github](https://github.com/dponcez/custom-html5-video-project.git) to see the full code~~

**You can see the full code from this repository.**
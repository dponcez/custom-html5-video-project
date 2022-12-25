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
  <img width='300px' src='data:image/jpeg;base64,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' alt='Dark mode image'/>
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
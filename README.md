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


~~Follow my github account [dponcez github](https://github.com/dponcez/custom-html5-video-project.git) to see the full code~~

**You can see the full code from this repository.**
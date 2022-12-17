# Custom HTML 5 Video Project

Files root:
- assets
  |--- icons
  |--- images
- css
  |--- index.css
- js
  |--- index.js
- video
- .gitignore
- index.html
- README

We initialize this repo updating our html file with the following snippet code.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <!-- Basic Page Needs -->
      <meta charset='UTF-8'>
      <meta name='description' content=''>
      <meta name='author' content=''>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <!-- Mobile Specific Metas -->
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>Custom Video Player</title>
      <!-- CSS -->
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css'>
      <link href='css/index.css' rel='stylesheet'>
      <!-- Fonts -->
      <link href='https://fonts.googleapis.com/css2?family=Play&family=Inter&display=swap'>
    </head>
    <body>
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
    </body>
```

You can find the full *HTML* code in the following repo [dponcez github](https://github.com/dponcez/custom-html5-video-project.git)
import { selector } from "./custom_functions.js";

export const template = () => {

  const main = selector('.main');
  
  main.innerHTML = `
    <div class="spinner--container" data-spinner>
      <div class="spinner"></div>
    </div>
    <header class="header flex">
      <h2 class="logo">video<span>player</span></h2>
      <div class="toggle--container flex">
        <button class="toggle inactive" id="dark-mode" aria-describedby="darkMode" role="button" data-dark-mode></button>
      </div>
    </header>
    <figure class="figure--container">
      <div class="player--container">
        <div class="hidden" data-player="player" role="main">
          <div class="video--container" id="container">
            <video class="video" src="./assets/video/Chosen.mp4" poster="./assets/images/poster.jpg" data-source="video"></video>
          </div>
          <section class="controls" role="controls" aria-describedby="controls container">
            <div class="progress" data-progress="progress" role="progressbar">
              <div class="progress--bar" data-progress-bar="progress--bar"></div>
              <div class="progress__slider" data-progress-slider="progress-slider"></div>
            </div>
            <div class="controllers" role="control player container">
              <div class="player--controls">
                <button class="prev btn btn--medium" data-prev="prev" title="Previous" aria-describedby="previous button">
                    <i class="fas fa-chevron-left" aria-label="icon previous" role="icon" aria-describedby="icon previous"></i>
                </button>
                <button class="play btn btn--large" data-play="play" title="Play / Pause" aria-describedby="play button">
                    <i class="fas fa-play" aria-label="icon play" role="icon" aria-describedby="icon play"></i>
                </button>
                <button class="next btn btn--medium" data-next="next" title="Next" aria-describedby="next button">
                    <i class="fas fa-chevron-right" aria-label="icon next" role="icon" aria-describedby="icon next"></i>
                </button>
              </div>
            </div>
            <div class="skip--container" role="skip buttons">
              <button class="skip--backward btn btn--small" data-skip="-10" title="Skip Backward" aria-describedby="skip backward button">
                <i class="fa-solid fa-backward" aria-label="icon skip" role="icon" aria-describedby="icon skip backward"></i>
                  -10
              </button>
              <button class="skip--forward btn btn--small" data-skip="25" title="Skip Forward" aria-describedby="skip forward button">
                <i class="fa-solid fa-forward" aria-label="icon skip" role="icon" aria-describedby="icon skip forward"></i>
                  25
              </button>
            </div>
            <div class="volume--container" role="volume and slider container">
              <button class="mute--btn btn btn--medium" data-mute="mute" title="Mute Sound" aria-describedby="mute button">
                  <i class="fas fa-volume-up" aria-label="icon mute" role="icon" aria-describedby="icon mute"></i>
              </button>
              <input type="range" name="slider" class="slider" id="slide" 
                data-slider="slider" min="0" max="100" value="5" step="1"
                aria-required="false" aria-autocomplete="false" 
                aria-invalid="false" autocomplete="false" role="slider">
            </div>
            <div class="timer--container" role="timer container">
              <span class="timer" data-timer="timer" role="timer">0:00/0:00</span>
            </div>
            <div class="expand--container">
              <button class="expand--btn" data-expand="expand" title="Open Screen / Close Screen" aria-describedby="expand button" role="switch">
                <i class="fa-solid fa-up-right-and-down-left-from-center" aria-label="icon expand" role="icon" aria-describedby="icon expand screen"></i>
              </button>
            </div>
          </section>
        </div>
      </div>
      <figcaption class="status--container">
        <p class="status" data-status="status" aria-describedby="status"></p>
        <p class="artist" data-artist="artist" aria-describedby="status"></p>
      </figcaption>
    </figure>
  `;
}
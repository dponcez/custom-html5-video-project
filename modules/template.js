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
            <video class="video" src="./assets/video/Chosen.mp4" poster="./assets/images/poster.jpg" data-source></video>
          </div>
          <section class="controls" role="controls" aria-describedby="controlContainer">
            <div class="progress" role="progressbar" data-progress>
              <div class="progress--bar" data-progress-bar></div>
              <div class="progress__slider" data-progress-slider></div>
            </div>
            <div class="timer--container" role="timer container">
              <span class="timer" data-timer="timer" role="timer">0:00/0:00</span>
            </div>
            <div class="controllers" role="controlContainer">
              <div class="player--controls">
                <button class="prev btn btn--medium" aria-describedby="previousBbutton" data-prev>
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="play btn btn--large" aria-describedby="playButton" data-play>
                    <i class="fas fa-play"></i>
                </button>
                <button class="next btn btn--medium" aria-describedby="nextButton" data-next>
                    <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div class="skip--container" role="skip buttons">
              <button class="rewind--btn btn flex" id="rewindButton" aria-describedby="rewindButton" role="button" data-skip="-10">
                -10
                <i class="fa fa-solid fa-backward"></i>
              </button>
              <button class="forward--btn btn flex" id="forwardButton" aria-describedby="forwardButton" role="button" data-skip="+25">
                <i class="fa-solid fa-forward"></i>
                +25
              </button>
            </div>
            <div class="volume--container" role="volumeContainer">
              <button class="volume flex" ariab-describedby="muteButton" data-volume>
                <i class="fa-solid fa-volume-high"></i>
              </button>
              <input class="slider" type="range" name="slider" value="4" min="0" max="100" step="0.5" id="slider" aria-describedby="slider" role="slider" data-slider>
            </div>
            <div class="expand--container">
              <button class="expand--btn" aria-describedby="expandButton" role="switch" data-expand="expand">
                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
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
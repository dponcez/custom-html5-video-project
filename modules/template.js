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
    <figure class="video--player">
      <div class="hidden">
        <div class="video--container">
          <video data-source poster="../assets/images/poster.jpg"></video>
        </div>
        <div class="control--container flex" id="controlContainer" aria-describedby="controlContainer" role="complementary">
          <div class="progress--bar" id="progressBar" aria-describedby="progressBar" role="progressbar" data-progress-bar>
            <div class="progress" id="progress" aria-describedby="progress" role="progressbar" data-progress></div>
          </div>
          <div class="flex">
            <span class="current--time timer inactive" aria-current="time" role="timer" data-current-time>00:00</span>
            <span>/</span>
            <span class="duration timer inactive" aria-current="time" role="timer" data-duration>00:00</span>
          </div>
          <div class="controls flex" aria-describedby="controls" role="complementary">
            <button class="rewind--btn btn flex" id="rewind" aria-describedby="rewind" role="button" data-skip="-10">
              -10
              <i class="fa fa-solid fa-backward"></i>
            </button>
            <div class="player--container flex">
              <button class="chevron--left btn flex" id="chevron-left" aria-describedby="chevronLeft" role="button" data-backward>
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button class="play--btn btn flex" id="playButton" aria-describedby="playButton" role="button" data-play>
                <i class="fa-solid fa-play"></i>
              </button>
              <button class="chevron--right btn flex" id="chevron-right" aria-describedby="chevronRight" role="button" data-forward>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <button class="forward--btn btn flex" id="forwardButton" aria-describedby="playButton" role="button" data-skip="+25">
              <i class="fa-solid fa-forward"></i>
              +25
            </button>
            <div class="volume--container flex">
              <button class="volume flex" data-volume>
                <i class="fa-solid fa-volume-high"></i>
              </button>
              <input class="slider" type="range" name="slider" min="0" max="100" id="slider" aria-describedby="slider" role="slider" data-slider>
            </div>
            <div class="expand--container flex">
              <button class="expand--btn" aria-describedby="expandButton" role="switch" data-expand="expand">
                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <figcaption class="feature--container flex">
        <p class="song--name" role="dialog" aria-describedby="status" data-song></p>
        <div class="flex">
          <p class="artist--name" role="dialog" data-artist></p>
          <span class="dash"></span> 
          <p class="album--name" role="dialog" data-album></p>
        </div>
      </figcaption>
    </figure>
  `;
}
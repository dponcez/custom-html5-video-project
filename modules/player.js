import { log, selector, selectorAll, eventHandler } from "./custom_functions.js";
import { formatTime } from '../utils/formatTime.js';
import { debounce } from '../utils/debounce.js';

export const player = () => {
  const htmlRefs = {
    video: selector('[data-source]'),
    playBtn: selector('[data-play]'),
    prevBtn: selector('[data-prev]'),
    nextBtn: selector('[data-next]'),
    muteBtn: selector('[data-volume]'),
    skipBtn: selectorAll('[data-skip]'),
    slider: selector('[data-slider]'),
    spinner: selector('[data-spinner]'),
    songName: selector('[data-song]'),
    artistName: selector('[data-artist]'),
    albumName: selector('[data-album]'),
    progressBar: selector('[data-progress-bar]'),
    progress: selector('[data-progress]'),
    durationText: selector('[data-duration]'),
    currentText: selector('[data-current-time]')
  }

  const {
    video,
    playBtn,
    prevBtn,
    nextBtn,
    muteBtn,
    skipBtn,
    slider,
    spinner,
    songName,
    artistName,
    albumName,
    progressBar,
    progress,
    durationText,
    currentText
  } = htmlRefs;

  const icons = {
    fa_play: '<i class="fa-solid fa-play"></i>',
    fa_pause: '<i class="fa-solid fa-pause"></i>',
    fa_volume_mute: '<i class="fa-solid fa-volume-xmark"></i>',
    fa_volume_high: '<i class="fa-solid fa-volume-high"></i>'
  }

  const { fa_play, fa_pause, fa_volume_mute, fa_volume_high } = icons;

  let playlist;
  let current_index = 0;
  let timeout = 300;
  let playing = false;
  let isMute = false;
  let mousedown = false;

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      if(!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if(!Array.isArray(data.playlist)) throw new Error('Playlist is not an array');
      
      playlist = data;
      loadCurrentVideo(playlist, current_index)
    } catch (error) {
      log(error.message)
    }
  }

  const requestURL = '../json/index.json';
  fetchData(requestURL);

  let userAgent = navigator.userAgent.toLocaleLowerCase()

  const loadCurrentVideo = (data, index) => {
    const source = data.playlist[index];
    const { name, song, title, album, poster } = source;
    let ext = 'mp4';

    if(userAgent.indexOf('chrome') !== -1 || userAgent.indexOf('edge') !== -1) ext = 'webm';
    if(userAgent.indexOf('opera') !== -1 || userAgent.indexOf('safari') !== -1) ext = 'ogg';

    const SOURCE_PATH = `../assets/video/${song}.${ext}`;
    
    try {
      video.src = SOURCE_PATH;
      video.poster = poster;
      artistName.innerText = name;
      songName.innerText = title;
      albumName.innerText = album;

      video.load();
    } catch (error) {
      log(`Failure to load video data: ${error.message}`)
    }
  }

  const playVideo = () => {
    playBtn.innerHTML = fa_pause;
    video.play();
  }

  const pauseVideo = () => {
    playBtn.innerHTML = fa_play;
    video.pause()
  }

  const handlePlayVideo = () => {
    if(video.paused && !playing){
      playing = true;
      playVideo();
    }else{
      playing = false;
      pauseVideo();
    }
  }

  const handlePrevVideo = () => {
    current_index--;

    try {
      const PLAYLIST_LENGTH = playlist.playlist.length - 1;
      if(current_index < 0) current_index = PLAYLIST_LENGTH;

      video.currentTime = 0;
      progress.style.width = 0;

      loadCurrentVideo(playlist, current_index);
      playVideo();
    } catch (error) {
      log(`Failure to load the previous song: ${error.message}`)
    }
  }

  const handleNextVideo = () => {
    current_index++;

    try {
      const PLAYLIST_LENGTH = playlist.playlist.length - 1;
      if(current_index > PLAYLIST_LENGTH) current_index = 0;

      video.currentTime = 0;
      progress.style.width = 0;

      loadCurrentVideo(playlist, current_index);
      playVideo();
    } catch (error) {
      log(`Failure to load the next song: ${error.message}`)
    }
  }

  const handleMuteVideo = () => {
    const MUTED = video.muted ? video.muted = false : video.muted = true;
    if(!MUTED && !isMute){
      isMute = true;
      muteBtn.innerHTML = fa_volume_high;
      slider.value = 50;
    }else{
      isMute = false;
      muteBtn.innerHTML = fa_volume_mute;
      slider.value = 0;
    }
  }

  const handleVolumeSlider = () => {
    video.volume = slider.value / 100;

    (slider.value === '0') ?
      muteBtn.innerHTML = fa_volume_mute :
      muteBtn.innerHTML = fa_volume_high
  }

  // rewind of fast forward the current video
  skipBtn.forEach(button => {
    eventHandler(button, 'click', () => {
      const SUFFIX = button.dataset.skip;
      if(SUFFIX === '-10') video.currentTime -= 10;
      if(SUFFIX === '+25') video.currentTime += 25
    })
  })

  const seekTimeUpdate = (e) => {
    const { duration, currentTime } = e.srcElement;
    const percent = (currentTime / duration ) * 100;
    progress.style.width = `${percent}%`

    const durTime = video.duration;
    const curTime = video.currentTime;

    durationText.innerText = `0${formatTime(Number(durTime))}`;
    currentText.innerText = `0${formatTime(Number(curTime))}`;
  }
  
  const updateProgressBar = (e) => {
    const WIDTH = progressBar.offsetWidth;
    const OFFSET_X = e.offsetX;
    const DURATION = video.duration;

    video.currentTime = (OFFSET_X / WIDTH) * DURATION;
  }

  const loadMultimediaElement = () => spinner.style.display = 'none'

  eventHandler(video, 'canplaythrough', debounce(() => loadMultimediaElement(), timeout));
  eventHandler(video, 'timeupdate', seekTimeUpdate);
  eventHandler(video, 'loadedmetadata', seekTimeUpdate);
  eventHandler(video, 'ended', debounce(() => handleNextVideo(), timeout));

  eventHandler(playBtn, 'click', debounce(() => handlePlayVideo(), timeout));
  eventHandler(prevBtn, 'click', debounce(() => handlePrevVideo(), timeout));
  eventHandler(nextBtn, 'click', debounce(() => handleNextVideo(), timeout));
  eventHandler(muteBtn, 'click', debounce(() => handleMuteVideo(), timeout));
  eventHandler(slider, 'change', debounce(() => handleVolumeSlider(),timeout));

  eventHandler(progressBar, 'click', updateProgressBar);
  eventHandler(progressBar, 'mousemove', debounce((e) => mousedown && updateProgressBar(e), timeout));
  eventHandler(progressBar, 'mousedown', debounce(() => mousedown = true), timeout);
  eventHandler(progressBar, 'mouseup', debounce(() => mousedown = false), timeout);
}
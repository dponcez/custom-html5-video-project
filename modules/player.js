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
    progressBara,
    progress,
    durationText,
    currentText
  } = htmlRefs;

  const icons = {
    fa_play: '<i class="fa-solid fa-play"></i>',
    fa_pause: '<i class="fa-solid fa-pause"></i>'
  }

  const { fa_play, fa_pause } = icons;

  let playlist;
  let current_index = 0;
  let timeout = 300;

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
    let sourcePath = `../assets/video/${song}.${ext}`;
    
    try {
      if(userAgent.indexOf('chrome') !== -1 || userAgent.indexOf('edge') !== -1) ext = 'webm';
      if(userAgent.indexOf('opera') !== -1 || userAgent.indexOf('safari') !== -1) ext = 'ogg';

      video.src = sourcePath;
      artistName.innerText = name;
      songName.innerText = title;
      albumName.innerText = album;

      video.load();
    } catch (error) {
      log(`Failure to load video data: ${error.message}`)
    }
  }

  const handlePlayVideo = () => {
    if(video.paused){
      playBtn.innerHTML = fa_pause;
      video.play();
    }else{
      playBtn.innerHTML = fa_play;
      video.pause()
    }
  }

  const seekTimeUpdate = (e) => {
    const { duration, currentTime } = e.srcElement;
    const percent = (currentTime / duration ) * 100;
    progress.style.width = `${percent}%`

    const durTime = video.duration;
    const curTime = video.currentTime;

    durationText.innerText = `0${formatTime(Number(durTime))}`;
    currentText.innerText = `0${formatTime(Number(curTime))}`;
  }

  const loadVideoSource = () => spinner.style.display = 'none'

  eventHandler(video, 'canplaythrough', loadVideoSource);
  eventHandler(video, 'timeupdate', seekTimeUpdate);
  eventHandler(video, 'loadedmetadata', seekTimeUpdate);
  eventHandler(playBtn, 'click', debounce(() => handlePlayVideo(), timeout));
}
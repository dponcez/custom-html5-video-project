function initApp(){
  const video_container = document.getElementById('container');
  const video = document.querySelector('[data-source]');
  const info = document.createElement('p');
  const TITLE = document.querySelector('title');
  // button controllers
  const playButton = document.querySelector('[data-play]');
  const nextButton = document.querySelector('[data-next]');
  const prevButton = document.querySelector('[data-prev]');
  const skipButtons = document.querySelectorAll('[data-skip]');
  const expandButton = document.querySelector('[data-expand]');
  // volume controllers
  const muteButton = document.querySelector('[data-mute]');
  const volumeSlider = document.querySelector('[data-slider]');
  // bars
  const progress = document.querySelector('[data-progress]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const progressSlider = document.querySelector('[data-progress-slider]');
  // counter
  const counter = document.querySelector('[data-timer]');
  // track info
  const status = document.querySelector('[data-status]');
  const artistName = document.querySelector('[data-artist]');

  let index = 0;
  let dir = 'video';
  let ext = 'mp4';
  let mousedown = false;
  let isPlaying = false;
  let playlist;

  let userAgents = navigator.userAgent.toLowerCase();

  if(userAgents.indexOf('chrome') !== -1 || 
      userAgents.indexOf('edge') !== -1){
    ext = 'webm'
  }else if(userAgents.indexOf('firefox') !== -1 ||
      userAgents.indexOf('opera') !== -1){
    ext = 'ogg'
  }

  const fetchData =  async () => {
    const requestURL = './json/index.json';
    const response = await fetch(requestURL);
    playlist = await response.json();

    loadVideo(playlist[index]);
  }

  fetchData()

  function loadVideo(source){
    const { song, name, title, poster } = source;

    try {
      video.loop = false;
      video.src = `${dir}/${song}.${ext}`;
      video.poster = `${poster}`;
      info.innerHTML = 'Your browser does not support video element';

      status.innerHTML = `${title}`;
      artistName.innerHTML = `${name}`;

      TITLE.textContent = `${title} - ${name}`;

      video.appendChild(info);
      video_container.appendChild(video);

    } catch(error){
      console.log(`Bad request: ${error}`);
    }
  }

  const playVideo = () => {
    const iconPause = '<i class="fas fa-pause"></i>';
    playButton.innerHTML = iconPause;
    video.volume = 0.5;

    loadVideo(playlist[index]);
    video.play()
  }

  const pauseVideo = () => {
    const iconPlay = '<i class="fas fa-play"></i>';
    playButton.innerHTML = iconPlay;

    video.pause()
  }

  function playCurrentVideo(){
    if(!isPlaying){
      isPlaying = true;
      playVideo();
    }else {
      isPlaying = false;
      pauseVideo()
    }
  }

  function playNextVideo(){
    index++;
    if(index > playlist.length - 1){
      index = 0;
    }

    video.currentTime = 0;
    progressBar.style.width = 0;
    progressSlider.style.width = 0;

    loadVideo(playlist[index]);
    playVideo()
  }

  function playPreviousVideo(){
    index--;
    if(index < 0){
      index = playlist.length - 1;
    }

    loadVideo(playlist[index]);
    playVideo()
  }

  skipButtons.forEach(button => {
    button.addEventListener('click', () => {
      const suffix = button.dataset.skip;
      if(suffix.includes('-10')){
        video.currentTime -= 10;
      }else if(suffix.includes('25')){
        video.currentTime += 25
      }
    })
  })

  muteButton.addEventListener('click', () => {
    const isMuted = video.muted ? video.muted = false : video.muted = true;

    if(isMuted){
      muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }else {
      muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'
    }
  })

  function setVolumeSlider(){
    video.volume = volumeSlider.value / 100;
  }

  function handleFullScreen(){
    if(!document.mozFullScreen && !document.webkitFullScreen){
      video.mozRequestFullScreen ? 
        video.mozRequestFullScreen() : 
        video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    }else {
      document.mozCancelFullScreen ? 
        document.mozCancelFullScreen() : 
        document.webkitCancelFullScreen()
    }
  }

  video.addEventListener('fullscreenerror', (event) => {
    console.log(`An error occurred changing into fullscreen: ${event}`)
  })

  function seekTimeUp(e){
    let durmins, dursecs, curmins, cursecs;

    const update = e.srcElement;
    const { duration, currentTime } = update;
    const percent = ( currentTime / duration ) * 100;

    const slide = ( percent === 100 )
        ? ( progressSlider.style.width = `${percent}%` )
        : ( progressSlider.style.width = `${percent * 1.05}%` );
    progressBar.style.width = `${percent}%`;

    durmins = Math.floor( video.duration / 60 );
    dursecs = Math.floor( video.duration - durmins * 60 );

    curmins = Math.floor( video.currentTime / 60 );
    cursecs = Math.floor( video.currentTime - curmins * 60 );

    const getMinutes = ( durmins < 10 ) ? 
      '' + durmins : 
      Number( durmins );
    const getSeconds = ( dursecs < 10 ) ? 
      '0' + durmins : 
      Number( dursecs );

    const getCurrentMins = ( curmins < 10 ) ? 
      '' + curmins : curmins;
    const getCurrentSecs = ( cursecs < 10 ) ? 
      '0' + cursecs : cursecs;

    counter.innerHTML = `${getMinutes}:${getSeconds}/${getCurrentMins}:${getCurrentSecs}`;

    return slide
  }

  function updateProgressBar(e){
    const width = progress.offsetWidth;
    const update = e.offsetX;
    const duration = video.duration;

    video.currentTime = (update / width) * duration;
  }

  video.addEventListener('timeupdate', seekTimeUp);
  video.addEventListener('loadedmetadata', seekTimeUp);
  video.addEventListener('ended', playNextVideo);
  playButton.addEventListener('click', playCurrentVideo);
  nextButton.addEventListener('click', playNextVideo)
  prevButton.addEventListener('click', playPreviousVideo);
  expandButton.addEventListener('click', handleFullScreen)
  volumeSlider.addEventListener('volumechange', setVolumeSlider);
  volumeSlider.addEventListener('input', setVolumeSlider);
  progress.addEventListener('click', updateProgressBar);
  progress.addEventListener('mousemove', (e) => mousedown && updateProgressBar(e));
  progress.addEventListener('mousdown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
}

initApp()
# Custom Video Player

> **NOTE**: this project is a custom video application and has no relationship with any record label or video company. The purpose of this project is for entertainment only.
> The copyrights of the video used in this project belong to their respective owners.

## Development Environment
----

__Technologies__

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

__Souce code editor__

- [VSCode](https://code.visualstudio.com)

__Tool__

- [GIT](https://git-scm.com)

### Project Structure
----

```
└── 📁custom-html5-video-project
    └── 📁assets
        └── 📁icons
        └── 📁images
        └── 📁video
    └── 📁css
        └── styles.css
    └── 📁hooks
        └── theme.js
    └── 📁js
        └── index.js
    └── 📁json
        └── index.json
    └── 📁modules
        └── custom_functions.js
        └── player.js
        └── template.js
    └── 📁utils
        └── debounce.js
        └── formatTime.js
    └── .gitignore
    └── favicon.ico
    └── index.html
    └── LICENSE
    └── README.md
```

### ¿What is JSDoc?
----

[JSDoc](https://jsdoc.app) is a JavaScript documentation that uses tags to describe additional information about parameters and their return value, also a powerful tool for documenting JavaScript code.

Not only do they help other developers understand how to use your code, but they can also be used to generate automatic documentation.

Some of the advantages of using JSDoc tags are:

- Improves code readability.
- Makes the code easier to understand to other developers.
- Allows automatic documentation generation.
- Helps detect errors and inconsistencies in the code.
- Improve team collaboration.
<small style="font-size: .65rem">[META]</small>

Some of the most common JSDoc tags are: 

- @function
- @description
- @param
- @returns 

__Basic syntaxis:__

```js
  /**
   * 
   * Description of the function
   * @param { type } nameOfParam: description of parameter
  */

 function myFunction(nameOfParam){
  // code goes here
 }
```

__Explanation__

- __@function__: refers to a function and usually used in conjunction with the function name.
- __@description__: indicates detailed information about the functions, variables, classes or methods that are documented.
- __@param__: is a tag used in function and method documentation to be describe the parameters that are passed to functions.
- __{ type }__: specifies the data type of parameter, for example (string, number, object) etc.
- __@returns__ is a tag used to describe the return value of a function.
- __nameOfParam__: is the name of parameter.

__Example__

```js
  /**
   * 
   * @function sum
   * @description: calculate the sum of two numbers
   * @param { number } a: return the value of a
   * @param { number } b: return the value of b
   * @returns { number } return the sum of a and b
  */

  function sum(a, b){
    return a + b
  }
```

The following functions described below use JSDoc tags to discribe the purpose of each function and the parameters these function receive.

The JSDoc is not available in the examples below, but you can see them in the repository.

### Debounce
----

The ```debounce()``` function forces a function to wait a few times before running the execution and preventing from being called several times.

```js
  export function debounce(fun, wait, immediate){
    let timer;
    let later = () => {
      if(!immediate){
        func.apply(this, arguments)
      }
    }

    return (...args) => {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(later, wait);

      const callNow = immediate && !timer;
      if(callNow){
        func.apply(context, args)
      }
    }
  }
```

### Format Time
----

The ```formatTime``` function allows you to get the time from current format.

```js
const formatTime = (time) => {
  const hour = Math.floor(~~(time / 3600));
  const minutes = Math.floor(~~(time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  let output = "";

  //.... 
}
```

More information about this function and how to use it, go to [formatTime function](https://github.com/lkopacz/egghead-react-a11y-audio-player) and follow the steps: 

1. Swtich to branch <i class="fa-solid fa-code-branch"></i> section
2. Choose the 09-mute-states branch <i class="fa-solid fa-code-branch"></i>
3. Choose the code <i class="fa-solid fa-code"></i> section
4. Go to folder <i class="fa-regular fa-folder"></i> (__src__)
5. Next, go to foler <i class="fa-regular fa-folder"></i> (__Components__)
6. Choose the file <i class="fa-regular fa-file"></i> (__audio-player.js__)

Owner: [Lindsey Kopacz](https://github.com/lkopacz).

### Switch to Custom Video Player
----

__Usage__

To use this video player, you must open your development environment, in this case VSCode and access the index.html file, once in the file, press the "Show preview" button, which is located at the top right of the index.html, this will make the project open in a new window, to the right side of your index.html file, once there you can use the player.

__Characteristics__

It is a video player, with an attractive user interface, you can also change the theme from light to dark with the button on the top right.
Additionally, the player contains the following functionalities:

- Play the current video.
- Go back or forward a video for "n" seconds.
- Change video by pressing the forward and/or back buttons.
- Increase or decrease the volume.
- See the duration time and/or elapsed time.

__Requirements__

- Have a development environment.
- It is not necessary to have an internet connection to use the player, but the source type and icons may be changed, since external links are used.

### (UI/UX) Design
----

__¿What is UI/UX design?__

- UI (User Interface): refers to the visual appearance of an application or website, including elements such as buttons, menus, colors and fonts.

- UX (User Experience): focuses on the user's experience when interacting with an application, from ease of use to overall satisfaction.
<small style="font-size: .65rem">[GEMINI]</small>

### What is Dark Mode?
----

Dark mode is the ability to switch from light to dark on different devices, such as _laptops_, _smartphones_, _computers_, _tablets_, including _website_ or _web pages_, changing its color scheme, according to a particular situation.

- Reduce eye strain.
- Improve battery life.
- Enhanced visibility.
- Aesthetic appeal.

Most modern operation system and many apps offer dark mode as an option.
It can usually be enabled or disbled in the device's settings or within the app itself.
<small style="font-size: .65rem">[GEMINI]</small>

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

### Code Fragment Analysis
----

__fetchData__

Within the _fetchData_ function, all the logic that will be used to extract the data from the playlist, which is stored in the _JSON_ file, is stored and thus, load the first information in said list.

__Operation:__

1. __Get data:__ the _fetch_ function is used to request the JSON file that contains the video information.

2. __Parse data:__ converts the JSON response into a JavaScript object, which is stored in the _playlist_ variable.

3. __Loading videos:__ the _loadCurrentVideo_ function is responsible for loading or obtaining the first video in the playlist.

```js
const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      if(!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if(!Array.isArray(data.playlist)) throw new Error('Playlist is not an array');

      playlist = data;
      loadCurrentVideo(playlist, current_index)
    } catch(error) {
      log(`${error.message}`)
    }
  }

const requestURL = '../json/index.json';
fetchData(requestURL)
```

__Explanation:__

1. __Declaration of the ```fetchData``` function:__

    - ```async```: Indicates that the function is asynchronous, meaning that it can perform operations that take time without blocking the execution of the rest of the code (such as waiting for a file to be completely loaded).

    - the variable ```const requestURL = "../json/index.json"```, defines the _URL_ or _Path_ of the _JSON_ file, which contains the playlist information.

2. __Block _try...catch_:__

    - ```try```: attempts to execute the code inside the block.
      - ```fetch(URL)```: makes an _HTTP_ request or request to obtain the information from the JSON file.

      - - ```if(!response.ok) throw new Error('Network response was not ok')```: if the request for the information of the data found in the file is not satisfactory, it will throw an error informing that something has gone wrong with the data loading.

      - ```response.json()```: allows you to convert the response (which is a RESPONSE object) to a JavaScript object.

      - ```if(!Array.isArray(data.playlist)) throw new Error('Playlist is not an array')```: Check if _data.playlist_ is an array before assigning it to the variable _playlist_ , this prevents errors if the JSON structure changes.

      - ```playlist```: the variable _json_ is assigned, which contains the response that is converted to a JavaScript object.

      - ```loadCurrentVideo(playlist, current_index)```: loads the first video in the playlist.
    
    - ```catch```: If an error occurs during the execution of the ```try``` block, this block will be executed.

      - ```log(`${error.message}`)```: prints an error message to the console, indicating that there was a problem loading the data.

3. __Call to the ```fetchData``` function:__
    - _fetchData(requestURL):_ invokes the function to start the process of obtaining and loading the data.

__loadCurrentVideo__

In this JavaScript code fragment, a function called ```loadCurrentVideo``` is defined, which is responsible for loading the information of a specific video from a video player, based on the data provided in an object.

__Operation:__

1. __Object destructuring:__ extracts the properties of the input object, for ease of use.

2. __Interface update:__ modifies the _HTML_ elements to display the video information.

3. __Video load:__ establishes the source of the video element and loads it.

4. __Error Handling:__ a _try...catch_ block is used to catch errors that may occur during the data loading process.

```js
let userAgent = navigator.userAgent.toLowerCase();

const loadCurrentVideo = (data, index) => {
    const source = data.playlist[index];
    const { artist, song, title, album } = source;
    let ext = 'mp4';

    if(userAgent.indexOf('chrome') !== -1 || userAgent.indexOf('edge') !== -1) ext = 'webm';
    if(userAgent.indexOf('opera') !== -1 || userAgent.indexOf('safari') !== -1) ext = 'ogg';

    const SOURCE_PATH = `../assets/video/${song}.${ext}`;
    
    try {
      video.src = SOURCE_PATH;
      artistName.innerText = artist;
      songName.innerText = title;
      albumName.innerText = album;

      video.load();
    } catch (error) {
      log(`Failure to load video data: ${error.message}`)
    }
  }
```

__Explanation:__

1. ```let userAgent = navigator.userAgent.toLowerCase()```:
    - _navigator.userAgent_ is a property of the Navigator object in JavaScript that returns the user agent string for the current browser.
    <small style="font-size: .65rem">[Leo AI] - Brave</small>

2. ```const loadCurrentVideo = (data, index) => {```:
    - a constant function called _loaCurrentVideo_ is defined, which takes two parameters ```data``` and ```index```, the first parameter is an object that contains the information of a video or song, such as (artist, song , title, album), and the second parameter is the index that will be passed to the object to indicate that the video will start at index 0.

3. ```const source = data.playlist[index]```: 
    - starts the information found in the JSON file, at the first index.

4. ```const { artist, song, title, album } = source```:
    - a destructuring of the _current_ object is performed to extract the properties and assign them to the variables. This makes it easier to access these values ​​within the function.

5. ```let ext = 'mp4'```: 
    - default extension of a video element.

6. ```indexOf()```:
    - The indexOf() function returns the index of the position of the string "Navigator Name" within the user agent string.

7.  ```if(userAgent.indexOf('chrome') !== -1 || userAgent.indexOf('edge') !== -1) ext = 'webm'```:
    - it will look for the string "Navigator Name" inside the user agent string and if it finds it, it will execute the code inside the if block.

8. ```try```: 
    - a _try_ block is started to handle possible errors that may occur during code execution.

9. ```artistName.innerText = `${artist}` ```:
    - the name of the artist is set within the _artistName_ element, which is obtained from the _artist_ property of the _current_ object.

10. ```songName.innerText = `${title}` ```:
    - the video title is set within the _songName_ element, which is obtained from the _title_ property of the _current_ object.

11. ```video.src = `${song}` ```:
    - the source of the video element is set within the video_ element, with the URL of the song that is obtained from the _song_ property of the _current_ object.

12. ```video.load()```:
    - loading of the video file begins.

13. ```catch(error)```:
    - if any error occurs during execution within the _try_ block, the _catch_ block is executed.

14. ```log(`Failure to load data: ${error}`)```:
    - an error message is printed to the console, indicating that there was a problem processing the data.

__playVideo__

When the user clicks or presses the _play_ button, the _playVideo_ function is called, to allow the player to start playing the selected video.

__Operation:__

1. __Play button icon change:__ the icon changes to "pause" (<i class="fa-solid fa-pause"></i>), to indicate that at any time, the user can press said button, to pause the current video.

2. __Start the player:__ when you press the _play_ button, the _play()_ method that is associated with the video element is activated and the video begins to play.

```js
const playVideo = () => {
    playBtn.innerHTML = fa_pause;
    video.play();
  }
```

__Explanation:__
    
1. ```playBtn.innerHTML = fa_pause```: the _play_ button element is responsible for playing the current video and changes its icon to _fa_pause_, to indicate to the user that the current video can be paused or stopped.
    - ```fa_pause```: it is an object that works as a variable, since it is stored in the _icons_ object, like this: ```const icons = {fa_pause: '<i class="fa-solid fa- pause"></i>'}```.

2. ```video.play()```: code responsible for making an video or a song start playing.
    - ```video```: _HTML_ element.
    - ```play()```: method responsible for starting a playback.

__pauseVideo__

When the user clicks or presses the _pause_ button, the _pauseVideo_ function is called, to allow the player to stop playing the selected video.

__Operation:__

1. __Play button icon change:__ the icon changes to "play" (<i class="fa-solid fa-play"></i>), to indicate that at any time, the user can press said button, to play the current video.

2. __Stop the player:__ when you press the _pause_ button, the _pause()_ method that is associated with the video element is activated and the playback of the video is paused.

```js
const pauseSong = () => {
    pauseBtn.innerHTML = fa_play;
    video.pause()
  }
```

__Explanation:__

1. ```pauseBtn.innerHTML = fa_play```: the _pause_ button element is responsible for pausing the playback of the current video and changes its icon to _fa_play_, to indicate to the user that the current video can start playing.
    - ```fa_play```: it is an object that works as a variable, since it is stored in the _icons_ object, like this: ```const icons = {fa_play: '<i class="fa-solid fa- ´play"></i>'}```.

2. ```video.pause()```: code responsible for stopping the playback of an audio or a song.
    - ```video```: _HTML_ element.
    - ```pause()```: method responsible for pausing a playback.

__handlePlayVideo__

This function is responsible for changing the state of the play button, from _play_ to _pause_, when the user has clicked on the play button, acting as a switch.

Every time the _handlePlayVideo_ function is called, it checks the current playing state and performs the opposite action.

__Operation:__

1. __If the video is not playing:__ start playback and change the state of the _playing_ variable to __true__.

2. __If video is playing:__ pause the video and change the state of the variable _playing_ to __false__.

__Additional considerations:__

1. __Variable ```playing```:__ this variable acts as an indicator of the current state of playback. Its value changes each time the ```handlePlayVideo``` function is called.

2. __```playVideo()``` and ```pauseVideo()``` functions:__ these functions contain the logic to start and pause video playback. 

```js
const handlePlayVideo = () => {
    if(video.paused && !playing) {
      playing = true;
      playVideo()
    }else {
      playing = false;
      pauseVideo()
    }
  }
```

__Explanation:__

1. - ```handlePlayVideo```: This function works as a switch, to allow the user to change the state of the play button. It is created using an arrow function ```() => {}``` that is assigned to a constant ```const``` to define the body containing the logic.

2. - ```if(!playing){}```: an _if_ condition is used to determine if the _playing_ variable is false, which will allow the code to be executed within the braces ```{}```.

3. - ```playing = true```: the _playing_ variable is set to true, indicating that it is now active and video playback can start.

4. - ```playVideo()```: function responsible for starting playback.

5. - ```else{}```: if the _if_ condition is not met, the code that is in this block is executed.

6. - ```playing = false```: the _playing_ variable is set to false, indicating that said variable is inactive and stopping playback.

7. - ```pauseVideo()```: function responsible for pausing video.

__handlePrevSong__

This function is responsible for playing the previous video every time the user presses the "back" button (<i class="fa-solid fa-chevron-left"></i>).

__Operation:__

1. __Decrements the index of a video:__ the current_index value in the playlist is decremented.

2. __List handling:__ if the list reaches the beginning, it returns to the end of said list.

3. __Restart playback:__ the video playback position and progress bar are reset.

4. __Load new video:__ the previous video is loaded into the player.

5. __Start playback:__ the video starts loading.

__Additional considerations:__

1. __Global variables:__ the variables ```current_index```, ```playlist```, ```video```, ```progress```, are accessible within the scope of this function.

```js
const handlePrevVideo = () => {
    current_index--;

    try {
      const PLAYLIST_LENGTH = playlist.playlist.length - 1;
      if(current_index < 0) current_index = PLAYLIST_LENGTH;

      video.currentTime = 0;
      progress.style.width = 0;

      playlist ?
        spinner.style.display = 'flex' :
        loadMultimediaElement();

      loadCurrentVideo(playlist, current_index);
      playVideo();
    } catch (error) {
      log(`Error loading previous video: ${error.message}`)
    }
  }
```

__Explanation:__

1. __```handlePrevVideo```:__ this function is used to handle the action of moving to the previous video in the playlist.

2. __```current_index--```:__ in this case, the variable _current_index_ decrements the value by 1, to track the current position of the video.

3. __```try/catch```__: block to handle possible errors in the execution of the code, and throw an error through the console, if the code that is in the _try_ block is not executed.

4. __```const PLAYLIST_LENGTH = playlist.playlist.length - 1```:__ store the length of the playlist.

5. __```if(current_index < 0) current_index = PLAYLIST_LENGTH```:__ if the current_index becomes negative, sets the current_index to the last item in the playlist.

6. __```video.currentTime = 0```:__ the video playback is restarted at its initial position.

7. __```progress.style.width = 0```__: set the width of the video to initial position.
 
8. __```playlist ? spinner.style.display = 'flex' :
        loadMultimediaElement()```__: determine if the playlist is not loaded, if so, the _spinner_ class is loaded, but if the playlist if loaded completely, the _loadMultimediaElement_ function is called and the _spinner_ class is hidden.

9. __```loadCurrentVideo(playlist, current_index)```:__ the _loadCurrentVideo_ function is called to load the new video (the previous one in the list) from the player.

__handleNextVideo__

Like the previous function, this function is responsible for the sequential video, with the difference that it advances to the next video, each time the user presses the "forward" button (<i class="fa-solid fa -chevron-right"></i>).

__Operation:__

1. __Increment the index of a video:__ the current_index value in the playlist is incremented.

2. __List management:__ if the list reaches the end, it returns to the beginning of said list.

3. __Restart playback:__ the video playback position and progress bar are reset.

4. __Load new video:__ the next video is loaded into the player.

5. __Start playback:__ the video starts loading.

__Additional considerations:__

1. __Global variables:__ the variables ```current_index```, ```playlist```, ```video```, ```progress```, are accessible within the scope of this function.

```js
const handleNextVideo = () => {
    current_index++;

    try {
      const PLAYLIST_LENGTH = playlist.playlist.length - 1;
      if(current_index > PLAYLIST_LENGTH) current_index = 0;

      video.currentTime = 0;
      progress.style.width = 0;

      playlist ?
        spinner.style.display = 'flex' :
        loadMultimediaElement();

      loadCurrentVideo(playlist, current_index);
      playVideo();
    } catch (error) {
      log(`Error loading next video: ${error.message}`)
    }
  }
```

__Explanation:__

1. __```handleNextVideo```:__ this function is used to handle the action of moving to the next video in the playlist.

2. __```current_index++```:__ in this case, the _current_index_ variable increments the value by 1, to track the current position of the video.

3. __```try/catch```__: block to handle possible errors in the execution of the code, and throw an error through the console, if the code that is in the _try_ block is not executed.

4. __```const PLAYLIST_LENGTH = playlist.playlist.length - 1```:__ store the length of the playlist.

5. __```if(current_index > PLAYLIST_LENGTH) current_index = 0```:__ if index becomes positive, sets the current_index to the start of the playlist item.

6. __```video.currentTime = 0```:__ the video playback is restarted at its initial position.

7. __```progress.style.width = 0```__: set the width of the video to initial position.

8. __```playlist ? spinner.style.display = 'flex' : loadMultimediaElement()```__: determine if the playlist is not loaded, if so, the _spinner_ class is loaded, but if the playlist if loaded completely, the _loadMultimediaElement_ function is called and the _spinner_ class is hidden.

9. __```loadCurrentVideo(playlist, current_index)```:__ the _loadCurrentVideo_ function is called to load the new video (the next one in the list) from the player.

### License
-----

This project is distributed under the __MIT__ license. See the [LICENSE](./LICENSE) for more information

<p>&copy; 2024, Damian Ponce</p>
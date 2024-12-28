/**
 * create format time
 *
 * @function formatTime
 * @description get time from current format
 * @param { number } time: allows you to get a given value
 * @returns { function } returns format time
 */

// https://github.com/lkopacz/egghead-react-a11y-audio-player
// 1. Swtich to branch section
// 2. Choose the branch 09-mute-states

export const formatTime = (time) => {
  const hours = Math.floor(~~(time / 3600));
  const minutes = Math.floor(~~(time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  let output = "";
  if (hours > 0) output += `${hours} : ${minutes < 10 ? "0" : ""}`;

  output += `${minutes} : ${seconds < 10 ? "0" : ""}`;
  output += `${seconds}`;

  return output;
};
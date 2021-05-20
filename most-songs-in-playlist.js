// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist
let arr = [];

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let songTotal = 0;
  let answer;
  if (arr.length === 0) {
    answer = 0; }
  for (let i = 0; i < arr.length; i++) {
    const addMe = arr[i];
    songTotal += addMe;
    if (songTotal >= 60) {
      songTotal -= arr[i];
      answer = i;
      break;
    } else {
      answer = arr.length;
    }
  }
  return answer;
};

mostSongsInPlaylist(arr);
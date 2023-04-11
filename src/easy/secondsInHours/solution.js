function hoursToSeconds(hours) {
  const minutes = 60 * hours;
  const seconds = 60 * minutes;
  return seconds;
}

console.log(hoursToSeconds(3));

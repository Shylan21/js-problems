function totalMiles(time, speed) {
  const hours = time / 60;
  return Math.round(hours * speed);
}

console.log(totalMiles(29, 10));

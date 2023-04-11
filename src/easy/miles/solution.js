function kmToMiles(km) {
  const miles = km / 1.6;
  const milesRounded = Math.round(miles);
  return milesRounded;
}
console.log(kmToMiles(24));

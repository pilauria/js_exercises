function colorMix(color1, color2) {
  if (
    (color1 === 'red' && color2 === 'blue') ||
    (color2 === 'red' && color1 === 'blue')
  ) {
    return 'violet';
  } else if (
    (color1 === 'red' && color2 === 'yellow') ||
    (color2 === 'red' && color1 === 'yellow')
  ) {
    return 'orange';
  } else if (
    (color1 === 'blue' && color2 === 'yellow') ||
    (color2 === 'blue' && color1 === 'yellow')
  ) {
  }
}

myColor = colorMix('blue', 'red');
console.log(myColor);

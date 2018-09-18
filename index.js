function takeANumber (position, name) {
  var otherDeli = [];
  for (let i = 1; i < name.length; i++) {
otherDeli.push(`Welcome, ${name[i]}. You are number ${position[i]}in the line.`);}
return otherDeli;
}
function takeANumber (position, name) {
  var otherDeli = [];
  var i = 1
while (i< name.length) {
otherDeli.push(`Welcome, ${name[i]}. You are number ${position[i]}in the line.`);}
return otherDeli;
}
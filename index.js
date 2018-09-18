var position = [];

function takeANumber(position, name) {
position.push(`${name}`);
return (`Welcome, ${name}. You are number ${position.length} in line.`);
}





function nowServing (position) {
  var name = position.shift();
  if (position.length  === 1) {
    return (`Currently serving ${position.shift}`);
  }
  else if (position.length === 0) {
  return (`There is nobody waiting to be served!`)}
  }
var position = [];

function takeANumber(position, name) {
position.push(`${name}`);
return (`Welcome, ${name}. You are number ${position.length} in line.`);
}





function nowServing (position) {
  if (position === 0) {
  return (`There is nobody waiting to be served!`)}
  }
  if (position  === 1) {
    return position.shift ()
  }
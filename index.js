var position = [];

function takeANumber(position, name) {
position.push(`${name}`);
return (`Welcome, ${name}. You are number ${position.length} in line.`);
}





function nowServing (position) {
  if (position.length === 0) {
  return (`There is nobody waiting to be served!`)}
  else 
  return (`Currently serving ${position.shift()}.`);
}

function currentLine(line) {
 if (line.length === 0) {
   return (`The line is currently empty.`)}
 else 
 return (`The line is currently ${line.length}. ${name}.`);
 
}

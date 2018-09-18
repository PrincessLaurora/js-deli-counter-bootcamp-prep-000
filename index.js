var position = [];

function takeANumber (position, name) {
position.push(`${name}`);
return (`Welcome ${name}. You are number ${position.length} in line.`);
}


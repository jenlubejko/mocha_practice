let x = '123';
let y = '456';

callSetThings = () => {
  return setThings(true);
};

setThings = (boolean) => {
  if (boolean === true) {
    return x;
  } else {
    return y;
  }
};

module.exports = {
  callSetThings,
  setThings
};

const result = setThings(true);
console.log(result);
const result1 = callSetThings();
console.log(result1);
const ftoc = function(degree) {
  degree = (degree - 32) * (5/9);
  return degree = Math.round(degree*10)/10
};

const ctof = function(degree) {
  degree = (degree * (9/5)) + 32;
  return degree = Math.round(degree*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

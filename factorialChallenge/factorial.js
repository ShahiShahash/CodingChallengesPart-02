const fact = function (n) {
  if (n === 1) {
    return n;
  } else if (n > 1) {
    return n * fact(n - 1);
  }
};
console.log(fact(5));

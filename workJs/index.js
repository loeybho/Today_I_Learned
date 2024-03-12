function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching result from cache...");
      return cache[key];
    }

    console.log("Computing result...");
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}

function sum(a, b) {
  console.log("Executing sum function...");
  return a + b;
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));
console.log(memoizedSum(4, 5));
console.log(memoizedSum(4, 5));

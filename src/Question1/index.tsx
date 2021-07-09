export const arraySum = (inputArray) => {
  let res = inputArray.slice();
  let i = 0;

  while (i < res.length) {
    if (Array.isArray(res[i])) {
      res.splice(i, 1, ...res[i]);
    } else {
      i++;
    }
  }

  return res.reduce((a, b) => a + b, 0);
};

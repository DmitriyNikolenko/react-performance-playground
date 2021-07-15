export const longTask = (x = 5000000) =>
  [...Array(parseInt(x))]
    .map((e) => ~~(Math.random() * 1000000))
    .sort()
    .reduce((sum, num) => sum + num, 0);

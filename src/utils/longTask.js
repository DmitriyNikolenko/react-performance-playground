export const longTask = () =>
  [...Array(5000000)]
    .map((e) => ~~(Math.random() * 1000000))
    .sort()
    .reduce((sum, num) => sum + num, 0);

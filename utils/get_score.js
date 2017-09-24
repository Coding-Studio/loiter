module.exports = function getScore(a, b) {
  let score = 0;
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] == b[i]) {
      score++;
    }
  }
  return score;
}
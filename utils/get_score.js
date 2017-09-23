module.exports = function getScore(a, b) {
  score = 0;
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) {
      score++;
    }
  }
  return score;
}
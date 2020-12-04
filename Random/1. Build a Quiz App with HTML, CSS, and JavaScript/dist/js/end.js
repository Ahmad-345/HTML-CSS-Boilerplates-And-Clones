
const userName = document.getElementById("userName");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

const hightScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
console.log(hightScores);

finalScore.innerText = mostRecentScore;

userName.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !userName.value;
});

saveHighScore = e => {
  console.log("clicked it");

  const score = {
    score: Math.floor(Math.random() * 100),
    name: userName.value
  };

  hightScores.push(score);
  hightScores.sort( (a, b) => b.score - a.score);
  hightScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(hightScores));
  window.location.assign("index.html");
  
  e.preventDefault();
}
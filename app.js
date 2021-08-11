document.addEventListener("DOMContentLoaded", (event) => {
  //

  //   This variable holds all the messages being shown for every click.
  const result = document.getElementById("result");
  //

  let loveScore = Math.random() * 100;
  let loveScoreRound = Math.floor(loveScore) + 1;

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let love = [];
    let lover = document.getElementById("lover1Name").value;
    love.push(lover);

    if (loveScoreRound > 70) {
      result.innerHTML = `${loveScoreRound}% PERFECT MATCH!  Hey, ${love} If this was fiction, you guys are like Romeo and
        juliet `;
    } else if (loveScoreRound > 40) {
      result.innerHTML = `${loveScoreRound}% Hey, ${love}, There will be obstacles, if you want this to work you have to work really hard for it`;
    } else if (loverScoreRound === 0) {
      result.innerHTML = `${loverScoreRound}% Hey, ${love}, run for your life`;
    } else {
      result.innerHTML = `${loveScoreRound}% Hey, ${love}, I hate to break this to you but I have to. There's no future here. Sorry! `;
    }

    // storing user info in local storage and not allowing the user to check
    // for a name that has been entered twice.
    localStorage.setItem("love", JSON.stringify(love));
    if (localStorage.includes(love)) {
      alert("You cannot check for thesame lover");
    }

    event.preventDefault();
  });
});

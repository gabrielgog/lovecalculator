// Okay, let's load the DOM before doing anything with it.
document.addEventListener("DOMContentLoaded", (event) => {

    // A value that shows the user every message they should see

    let result = document.getElementById('result')

//   Generating random number and rounding it up
  let loveScore = Math.random() * 100;
  let loveScoreRound = Math.floor(loveScore) + 1;

//   Holding the form with a vairable and adding an event listener to it
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
    }  else {
      result.innerHTML = `${loveScoreRound}% Hey, ${love}, I hate to break this to you but I have to. There's no future here. Sorry! `;
    }

    /* storing user info in local storage and not allowing the user to check
     for a name that has been entered twice. */
    localStorage.setItem("love", JSON.stringify(love));
    if (localStorage[0] === love) {
      alert("You cannot check for thesame lover");
    }

    event.preventDefault();
  });
});

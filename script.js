let index = 0;
let quiz = document.getElementById("quiz");
let nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  let q = questions[index];
  quiz.innerHTML = `<h3>${q.q}</h3>`;

  q.options.forEach((opt, i) => {
    let div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;

    div.onclick = () => {
      if (i === q.answer) {
        div.classList.add("correct");
        navigator.vibrate(100);
      } else {
        div.classList.add("wrong");
        navigator.vibrate([200, 100, 200]);
      }
    };

    quiz.appendChild(div);
  });
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    quiz.innerHTML = "<h2>Quiz Finished</h2>";
    nextBtn.style.display = "none";
  }
};

loadQuestion();

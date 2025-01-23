let currentQuestion = 0;
let score = 0;
let timeRemaining = 52;

const timerElement = document.getElementById('time');

function startTimer() {
  const timer = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      submitQuiz();
    } else {
      timeRemaining--;
      timerElement.textContent = timeRemaining;
    }
  }, 1000);
}

function nextQuestion() {
  const questions = document.querySelectorAll('.question');
  questions[currentQuestion].classList.add('hidden');
  currentQuestion++;
  if (currentQuestion < questions.length) {
    questions[currentQuestion].classList.remove('hidden');
  } else {
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('submit-button').classList.remove('hidden');
  }
}

function submitQuiz() {
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, index) => {
  const selected = question.querySelector('input:checked');
  if (selected && +selected.value === 1) {
    score++;
  }
 });
   document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
     document.getElementById('score').textContent = score;
}

function restartQuiz() {
  location.reload();
}

startTimer();
document.querySelector('.question').classList.remove('hidden');
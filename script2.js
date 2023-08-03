const questions = [
  {
    title: "Enigme numéro 1",
    info: "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !",
    question:
      "“ SI JE SUIS  FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS ”",
    reponse:
      "“ SI JE SUIS  FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS ”",
    hint: "A = A ; B = b ; c = c ; d = d ; e = e ; f = f ; g = g ; h = h ; i = i ; j = j ; k = k ; l = l ; m = m ; n = n ; o = o ; p = p ; q = q ; r = r ; s = s ; t = t ; u = u ; w = w ; x = x ; y = y ; z = z",
  },
  {
    title: "Enigme numéro 2",
    info: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code“chiffrement par décalage”. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
    question:
      "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    reponse: "8 vers la droite",
    hint: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée  à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?",
  },
  {
    title: "Enigme numéro 3",
    info: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
    question:
      "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    reponse: "LE ROI LION",
    hint: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement  précis  de  ces  deux  lettres,  tandis  que  le  système  binaire informatique utilise 0 et 1.",
  },
];

const quizContainer = document.getElementById("quiz-container");
const title = document.getElementById("title");
const info = document.getElementById("info");
const question = document.getElementById("question");
const answerInput = document.getElementById("answer-input");
const hint = document.getElementById("hint");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const current = questions[currentQuestion];
  title.textContent = current.title;
  info.textContent = current.info;
  question.textContent = current.question;
  answerInput.value = "";
  hint.textContent = current.hint;
  hint.style.display = "block";

  if (currentQuestion >= questions.length - 2) {
    question.classList.add("ignore-question-style");
  } else {
    question.classList.remove("ignore-question-style");
  }
}

function checkAnswer() {
  const current = questions[currentQuestion];
  const answer = answerInput.value.trim().toUpperCase();
  const correctAnswer = current.reponse.trim().toUpperCase();
  if (answer === correctAnswer) {
    score++;
  }
}

function showNextQuestion() {
  checkAnswer();
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.innerHTML = `
    <div class="results">
      <h2>Résultats</h2>
      <p>Vous avez obtenu ${score} sur ${questions.length} bonnes réponses.</p>
      <button id="restart-btn">Recommencer</button>
    </div>
  `;
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    showQuestion();
  });
}

showQuestion();

submitBtn.addEventListener("click", () => {
  showNextQuestion();
});

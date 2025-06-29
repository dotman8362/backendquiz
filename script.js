const questions = [
  {
  question: "What is Node.js primarily used for?",
  options: ["Designing UI", "Client-side scripting", "Server-side scripting", "Database management"],
  answer: 2
},
{
  question: "Node.js runs on which engine?",
  options: ["V8", "Chakra", "SpiderMonkey", "Nitro"],
  answer: 0
},
{
  question: "Which of the following is NOT a core module in Node.js?",
  options: ["fs", "http", "events", "express"],
  answer: 3
},
{
  question: "What does npm stand for?",
  options: ["Node Package Manager", "Node Project Manager", "Network Package Module", "Node Program Manager"],
  answer: 0
},
{
  question: "Which command is used to run a Node.js application?",
  options: ["node run", "npm start", "node filename.js", "start node"],
  answer: 2
},
{
  question: "Which of the following is true about Node.js?",
  options: ["It is synchronous", "It blocks I/O", "It uses an event-driven model", "It runs in the browser"],
  answer: 2
},
{
  question: "Which command initializes a Node.js project with a package.json?",
  options: ["node init", "npm create", "npm init", "node start"],
  answer: 2
},
{
  question: "What is the default scope of variables in Node.js files?",
  options: ["Global", "Module", "Block", "Public"],
  answer: 1
},
{
  question: "Which keyword is used to import a module in Node.js (EJS)?",
  options: ["require", "import", "include", "fetch"],
  answer: 1
},
{
  question: "What does the fs module allow you to do?",
  options: ["Handle routing", "Create frontend components", "Work with the file system", "Manage databases"],
  answer: 2
},
{
  question: "What is Express.js?",
  options: ["Frontend framework", "Database tool", "Node.js web framework", "CSS preprocessor"],
  answer: 2
},
{
  question: "Which method handles GET requests in Express?",
  options: ["app.post()", "app.get()", "app.retrieve()", "app.route()"],
  answer: 1
},
{
  question: "What is req.params used for in Express?",
  options: ["To access body data", "To access path variables", "To send cookies", "To start a session"],
  answer: 1
},
{
  question: "Which middleware parses JSON bodies in Express?",
  options: ["express.static", "express.json", "bodyParser.urlencoded", "app.parser"],
  answer: 1
},
{
  question: "How do you set up a route in Express?",
  options: ["app.route(\"/\")", "app.get(\"/\", (req, res) => {...})", "express.get(\"/\")", "router.get(\"/\")"],
  answer: 1
},
{
  question: "What does res.send() do in Express?",
  options: ["Receives data", "Terminates server", "Sends response", "Parses JSON"],
  answer: 2
},
{
  question: "How do you create middleware in Express?",
  options: ["function(req, res)", "app.use((req, res, next) => {...})", "express.middleware", "middleware.create()"],
  answer: 1
},
{
  question: "What does next() do in middleware?",
  options: ["Ends request", "Skips response", "Calls next middleware", "Refreshes server"],
  answer: 2
},
{
  question: "What is the purpose of express.static()?",
  options: ["Real-time updates", "Serve static files", "Create dynamic routes", "Parse form data"],
  answer: 1
},
{
  question: "What port does Express typically use by default?",
  options: ["80", "3000", "8000", "443"],
  answer: 1
},
{
  question: "What is the default HTTP method for a form submission?",
  options: ["GET", "POST", "PUT", "DELETE"],
  answer: 0
},
{
  question: "Which HTTP method updates resources?",
  options: ["GET", "POST", "PUT", "CONNECT"],
  answer: 2
},
{
  question: "Which HTTP status code means 'Not Found'?",
  options: ["500", "403", "200", "404"],
  answer: 3
},
{
  question: "What status code is returned for a successful POST request?",
  options: ["200", "201", "400", "304"],
  answer: 1
},
{
  question: "Which tool is commonly used for API testing?",
  options: ["Figma", "Postman", "MongoDB Compass", "Webpack"],
  answer: 1
},
{
  question: "Which middleware is used to parse URL-encoded data?",
  options: ["express.urlencoded()", "express.json()", "bodyParser.text()", "cookie-parser()"],
  answer: 0
},
{
  question: "How can CORS be managed in Node.js?",
  options: ["Using cookie-parser", "Using helmet", "Using cors middleware", "Using dns module"],
  answer: 2
},
{
  question: "Which HTTP method deletes a resource?",
  options: ["remove", "delete", "destroy", "put"],
  answer: 1
},
{
  question: "What does req.body contain in a POST request?",
  options: ["Query string", "Path variables", "Form data", "Cookies"],
  answer: 2
},
{
  question: "Which environment variable is used to define the app port?",
  options: ["PORT", "APP_PORT", "SERVER_PORT", "NODE_PORT"],
  answer: 0
},
{
  question: "Which database is popular with Node.js?",
  options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  answer: 2
},
{
  question: "Which method is used to send a file in Express?",
  options: ["res.send()", "res.download()", "res.sendFile()", "res.file()"],
  answer: 2
},
{
  question: "What is the purpose of .env files?",
  options: ["Host frontend assets", "Store environment variables", "Log user data", "Deploy code"],
  answer: 1
},
{
  question: "Which package is used to hash passwords?",
  options: ["crypto", "bcrypt", "cookie-parser", "jwt"],
  answer: 1
},
{
  question: "What is middleware in Express?",
  options: ["A route handler", "A frontend library", "Function that processes requests", "A DB connector"],
  answer: 2
},
{
  question: "What does the 'async' keyword do in JavaScript?",
  options: ["Pauses code execution", "Makes a function asynchronous", "Imports a module", "Logs data to console"],
  answer: 1
},
{
  question: "What does process.env.PORT represent?",
  options: ["Default node version", "Host IP", "Custom port from env", "Express log level"],
  answer: 2
},
{
  question: "Which service is commonly used to deploy Node apps?",
  options: ["Figma", "Netlify", "Render", "WordPress"],
  answer: 2
},
{
  question: "Which statement correctly handles errors in async/await?",
  options: ["try/catch block", "if/else block", "while loop", "callback function"],
  answer: 0
},
{
  question: "Which command installs a Node.js package locally?",
  options: ["npm install -g", "npm start", "node install", "npm install"],
  answer: 3
}

];

let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);
let studentName = "";
let timer = 20 * 60;
let interval;

const startScreen = document.getElementById("start-screen");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const studentNameInput = document.getElementById("student-name");
const questionEl = document.getElementById("question");
const optionsForm = document.getElementById("options-form");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const userNameEl = document.getElementById("user-name");
const currentQ = document.getElementById("current-q");
const totalQ = document.getElementById("total-q");

function startQuiz() {
  studentName = studentNameInput.value.trim();
  if (!studentName) {
    alert("Please enter your name to begin.");
    return;
  }
  startScreen.classList.add("hide");
  quizBox.classList.remove("hide");
  totalQ.textContent = questions.length;
  showQuestion();
  interval = setInterval(updateTimer, 1000);
}

function showQuestion() {
  const q = questions[currentQuestion];
  currentQ.textContent = currentQuestion + 1;
  questionEl.textContent = q.question;
  optionsForm.innerHTML = "";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = i;
    if (selectedAnswers[currentQuestion] === i) radio.checked = true;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + opt));
    optionsForm.appendChild(label);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Submit" : "Next";
}

function updateTimer() {
  if (timer <= 0) {
    endQuiz();
    return;
  }
  timer--;
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  timerEl.textContent = `Time Left: ${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function endQuiz() {
  clearInterval(interval);
  saveAnswer();
  sendEmail();
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  userNameEl.textContent = studentName;
}

function sendEmail() {
  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].answer ? 1 : 0);
  }, 0);

//   emailjs.init("jzo_xszUuV3ZqdKCL");
  emailjs.send("service_3tklqal", "template_nossub4", {
    name: studentName,
    score: score + " out of " + questions.length,
  }).then(() => {
    console.log("Email sent!");
  }, (err) => {
    console.error("Email failed:", err);
  });
}

nextBtn.addEventListener("click", () => {
  saveAnswer();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    endQuiz();
  }
});

prevBtn.addEventListener("click", () => {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

function saveAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  selectedAnswers[currentQuestion] = selected ? parseInt(selected.value) : null;
}

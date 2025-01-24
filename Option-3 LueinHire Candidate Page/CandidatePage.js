// Dark Mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Hamburger Menu for responsive Navbar
document.querySelector(".hamburger").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Video Resume
function startMockInterview() {
  document.getElementById('mockVideo').play();
}

// Generate Resume
document.getElementById('generate-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const errorMsg = document.getElementById("errorMsg");
  if (name === "" || email === "" || phone === "" || address === "" || summary === "") {
    errorMsg.innerText = "Please fill all fields!";
    errorMsg.style.display = "block";
    resumePreview.style.display = "none";
    return;
}

// Hide error message if fields are valid
errorMsg.style.display = "none";
  const resumeOutput = `
  ========================
           Resume
  ========================
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  
  Professional Summary:
  ${summary}
  
  Skills:
  ${skills.split(',').join(', ')}

  Experience:
  ${experience}

  Education:
  ${education}
  ` 
  
  ;
  
  document.getElementById('resume-output').textContent = resumeOutput;
  if(resumeOutput===""){
    resumeOutput.innerHTML = "<p>Please enter a skill.</p>";
      return;
  }

  //Resume Score
  let score = Math.min(100, skills * 10 + experience / 5);
  document.getElementById('resumeScore').innerText = `Resume Score: ${score}/100`;
});

// Best Learning Course
const courses = [
  "JavaScript Basics", 
  "Python for Beginners", 
  "Data Science Fundamentals", 
  "React Development", 
  "Machine Learning Essentials"
];


function showCourses() {
  let courseList = document.getElementById('courseList');
  courseList.innerHTML = ''; 

  courses.forEach((course, index) => {
      let courseItem = document.createElement('div');
      courseItem.innerHTML = `
          <input type="checkbox" id="course${index}" class="courseCheckbox" onchange="updateProgress()">
          <label for="course${index}">${course}</label>
      `;
      courseList.appendChild(courseItem);
  });

  
  document.getElementById('progressContainer').style.display = "block";
}


function updateProgress() {
  let checkedCourses = document.querySelectorAll(".courseCheckbox:checked").length;
  let totalCourses = courses.length;
  let progressPercentage = Math.round((checkedCourses / totalCourses) * 100);

  
  document.getElementById('progressBar').style.width = progressPercentage + "%";
  document.getElementById('progressText').innerText = `Progress: ${progressPercentage}%`;
}

// Programming Challenges
function runCode() {
  let code = document.getElementById('codeInput').value;
  let outputMessage = document.getElementById("output-message");
  try {
    if (!code.trim()) {
      throw new Error("Please enter some code!");
  }
  let result = eval(code);
        outputMessage.innerText = "Run Successfully ✅";
        outputMessage.className = "success";
      
  } catch (error) {
    outputMessage.innerText = "Error in Code ❌";
        outputMessage.className = "error";
  }
}

// quiz
const questions = [
  {
      question: "What does HTML stand for?",
      answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "Home Tool Markup Language", correct: false },
          { text: "Hyperlinks and Text Markup Language", correct: false },
          { text: "Hyper Transfer Markup Language", correct: false }
      ]
  },
  {
      question: "Which language is used for web styling?",
      answers: [
          { text: "Python", correct: false },
          { text: "JavaScript", correct: false },
          { text: "CSS", correct: true },
          { text: "C++", correct: false }
      ]
  },
  {
      question: "What does CSS stand for?",
      answers: [
          { text: "Cascading Style Sheets", correct: true },
          { text: "Creative Style Sheets", correct: false },
          { text: "Computer Style Sheets", correct: false },
          { text: "Colorful Style Sheets", correct: false }
      ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  scoreBox.classList.add("hidden");
  totalQuestionsElement.textContent = questions.length;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(button, answer.correct));
      answerButtons.appendChild(button);
  });
  
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, isCorrect) {
  if (isCorrect) {
      button.classList.add("correct");
      score++;
  } else {
      button.classList.add("wrong");
  }
  
  Array.from(answerButtons.children).forEach(btn => {
      btn.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
});

function showScore() {
  questionElement.innerText = "Quiz Completed!";
  answerButtons.innerHTML = "";
  nextButton.style.display = "none";
  scoreBox.classList.remove("hidden");
  scoreElement.innerText = score;
}

restartButton.addEventListener("click", startQuiz);

startQuiz();



// Skill-Based Job Oppturnities
const jobs = [
  { title: "Front-End Developer", company: "TechCorp", location: "New York", skills: ["JavaScript", "React", "CSS"] },
  { title: "Data Analyst", company: "Data Inc.", location: "San Francisco", skills: ["Python", "SQL", "Excel"] },
  { title: "Back-End Developer", company: "Web Solutions", location: "Chicago", skills: ["Node.js", "MongoDB", "Express"] },
  { title: "UI/UX Designer", company: "Creative Minds", location: "Los Angeles", skills: ["Figma", "Sketch", "Adobe XD"] },
  { title: "Cybersecurity Analyst", company: "SecureNet", location: "Washington DC", skills: ["Cybersecurity", "Networking", "Ethical Hacking"] },
  { title: "Mobile App Developer", company: "AppGenie", location: "Austin", skills: ["Flutter", "React Native", "Swift"] },
];

document.getElementById("search-btn").addEventListener("click", function () {
  const skillInput = document.getElementById("skill-input").value.trim().toLowerCase();
  const jobResults = document.getElementById("job-results");

  jobResults.innerHTML = "";

  if (skillInput === "") {
      jobResults.innerHTML = "<p>Please enter a skill.</p>";
      return;
  }

  const filteredJobs = jobs.filter(job =>
      job.skills.some(skill => skill.toLowerCase().includes(skillInput))
  );

  if (filteredJobs.length === 0) {
      jobResults.innerHTML = `<p>No jobs found for "${skillInput}". Try another skill.</p>`;
      return;
  }

  filteredJobs.forEach(job => {
      const jobElement = document.createElement("div");
      jobElement.classList.add("job-item");
      jobElement.innerHTML = `
          <p class="job-title"><h3>Job-Title :</h3> ${job.title}</p>
          <p class="job-company"> <h3>Company Name :</h3>${job.company}</p>
          <p class="job-location"><h3>Location :</h3>${job.location}</p>
      `;
      jobResults.appendChild(jobElement);
  });
});





/* ------------------ Quiz to see if you have learned from article ----------- */

(function(){

function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];

      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question">${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`

      );
    }
  );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const userSelect = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(userSelect) || {}).value;
    
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    } else{
      answerContainers[questionNumber].style.color = 'red';
    }
   
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
{
  question: "What does LEO stand for?",
  answers: {
    a: "Low Earth Orbit",
    b: "Land Earth Orbit",
    c: "Legend Earth Orbit",
  },
  correctAnswer: "a"
},

{
  question: "How many tons of debris is estimated to be in orbit?",
  answers: {
    a: "7800 tons",
    b: "9200 tons",
    c: "6400 tons"
  },
  correctAnswer: "b"
},
{
  question: "Are most space debris coming from humans?",
  answers: {
    a: "yes",
    b: "no",
  },
  correctAnswer: "a"
},
{
  question: "What is the primal target for the NanoRack-debris Remove Satelitte?",
  answers: {
    a:"To capture debris and transform it into new energy whilst in space.",
    b:"It aim is to demonstrate key technologies for Active Debris Removal to reduce the risks presented by space debris.",
   
  },
  correctAnswer: "b"
}
];

// display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);
})();


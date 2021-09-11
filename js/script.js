
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	
	function showQuestions(questions, quizContainer){

	const output = [];
	let answers;

	for(let i=0; i < questions.length; i++){
		
		answers = [];

		for(letter in questions[i].answers){

			
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
  }

	function showResults(questions, quizContainer, resultsContainer){
	
	
	const answerContainers = quizContainer.querySelectorAll('.answers');
	
	
	let userAnswer = '';
	let numCorrect = 0;
	
	
	for(var i=0; i<questions.length; i++){

		
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
	
		if(userAnswer===questions[i].correctAnswer){
			
			numCorrect++;
			
			
			answerContainers[i].style.color = 'green';
		}
		else{
			answerContainers[i].style.color = 'red';
		}
	}

	
	resultsContainer.innerHTML = 'Antal rätta svar: ' + numCorrect;
	
  }

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
	  showResults(questions, quizContainer, resultsContainer);
  }
	
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
	
const myQuestions = [
	{
		question: "Hur många procent av all plast återvinns?",
		answers: {
			a: '24%',
			b: '49%',
			c: '67%'
		},
		correctAnswer: 'b'
	},
		{
		question: "Hur år tar det att bryta ner en plastpåse?",
		answers: {
			a: '1 år',
			b: '10 år',
			c: '100 år eller mer'
		},
		correctAnswer: 'c'
	},
	{
		question: "Vilket av följande ska sorteras som tidningar?",
		answers: {
			a: 'En pocketbok',
			b: 'Ett kuvert',
			c: 'En kartong'
		},
		correctAnswer: 'a'
	},
	{
		question: "Hur mycket energi sparas när järn återvinns istället för att bryta ny råvara?",
		answers: {
			a: '25%',
			b: '50%',
			c: '75%'
		},
		correctAnswer: 'c'
	},
	{
		question: "Hur många gånger kan glas återvinnas?",
		answers: {
			a: '100 gånger',
			b: '1000 gånger',
			c: 'Hur många gånger som helst'
		},
		correctAnswer: 'c'
	},
	{
		question: "Hur stor del av alla pappersförpackningar återvinns?",
		answers: {
			a: '35%',
			b: '55%',
			c: '75%'
		},
		correctAnswer: 'c'
	}
];

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
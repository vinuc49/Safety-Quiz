//Question bank
var questionBank = [{
        question: 'What does COSHH stand for?',
        option: ['Control of Substances Hazardous to Health', 'ACareful of Substances Harmful to Health', 'Control of Spillages Hazardous to Health', 'Control of Substances Hurtful to Health'],
        answer: 'Control of Substances Hazardous to Health'
    },
    {
        question: 'What year did RIDDOR start?',
        option: ['1990', '1995', '2000', '2005'],
        answer: '1995'
    },
    {
        question: 'The accident book is a legal document that does what?',
        option: ['The accident book is a legal document that does what?', 'Details risk assessments and safety rules.', 'Records the details of an accident in the workplace', 'Lists the first aid requirements of the workplace'],
        answer: 'Records the details of an accident in the workplace'
    },
    {
        question: 'Which of the following statements is likely to result in an injury to the operator?',
        option: ['Selecting the right tool for the job', 'Wearing safety goggles or glasses', 'Using a tool with loose handles', 'Keeping cutting tools sharp'],
        answer: 'Using a tool with loose handles'
    },
    {
        question: 'What does RIDDOR stand for?',
        option: ['Risk of Injury, Diseases and Dangerous Occurrences Reporting', 'Reporting of Injuries, Diseases and Dangerous Occurrences Regulations', 'Reporting of Information on Diseases and Dangerous Occurrences Risk', 'Risk of Injuries, Diseases and Dangerous Occurrences Regulations'],
        answer: 'Reporting of Injuries, Diseases and Dangerous Occurrences Regulations'
    },
    {
        question: 'What does PPE stand for?',
        option: ['Protective Preventative Equipment', 'Personal Protective Equipment', 'Personal Preventative Equipment', 'Peoples Protective Equipment'],
        answer: 'Personal Protective Equipment'
    },
    {
        question: 'Why is it important to wear PPE?',
        option: ['Because it looks right', 'Because it protects the tools', 'Because it protects you', 'Because it is what an employer tells you to do'],
        answer: 'Because it protects you'
    },
    {
        question: 'Which of the following describes a workplace health and safety hazard?',
        option: ['Putting the wet floor sign up after mopping the floor', 'An unanswered health and safety question', 'An activity that cannot be insured', 'Something that might cause harm'],
        answer: 'Something that might cause harm'
    },
    {
        question: 'The legal responsibilities of an employer with regards to health and safety include what? ',
        option: ['Charging employees for replacing damaged or lost PPE', 'Providing safe systems of work for all employees', 'Taking out additional insurances for dangerous work', 'AEnsuring that only one member of staff works on a dangerous job'],
        answer: 'Providing safe systems of work for all employees'
    },
    {
        question: 'What is the first action to take when approaching the scene of an accident?',
        option: ['Check for signs of life.', 'Wait for the emergency services.', 'Attend to the most serious injury', 'AMake sure the area is safe to enter.'],
        answer: 'AMake sure the area is safe to enter.'
    },
    {
        question: 'What is the best way of dealing with a hazard to ensure others are not put at risk?',
        option: ['Remove it immediately', 'Leave it for others to sort out.', 'Place a barrier tape around it.', 'Display a notice or warning sign'],
        answer: 'Remove it immediately'
    },
    {
        question: 'What are the safe systems of work, provided by an employer, designed to do?',
        option: ['They only help make the job quicker.', 'They only help to stop employees from having accidents.', 'They only help stop employees and all others from having accidents.', 'They only help prevent visitors from having accidents.'],
        answer: 'They only help stop employees and all others from having accidents.'
    },
    {
        question: 'Which of the following is the best method of finding information on workshop equipment?',
        option: ['From the health and safety at work manual', 'From the manufacturers handbook or technical data', 'By discussing it with a senior colleague', 'By contacting the original supplier of the equipment'],
        answer: 'From the manufacturers handbook or technical data'
    },
    {
        question: 'Which of the following would prevent injuries from occurring at work?',
        option: ['Keeping the workplace tidy', 'Wearing light clothing', 'Lifting heavy objects with a bent back', 'Keeping lighting to a minimum'],
        answer: 'Keeping the workplace tidy'
    },
    {
        question: 'What type of training is most likely to reduce back injuries when handling materials and loads?',
        option: ['1st aid training', 'Forklift truck training', 'Weight training', 'Manual handling training'],
        answer: 'Manual handling training'
    }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

/*aplicatie quiz*/

var questions = [
     {
           prompt: "Which breed of Sphynx has a strong, muscular neck?\n(a) Canadian\n\(b) Peterbold\n(c) Donskoy",
           answer: "a"
     },
     {
          prompt: "How are Sphynx Cats typically behaved?\n(a) Lazy\n\(b) Energetic\n(c) Agressive",
          answer: "b"
     },
     {
          prompt: "How many colors can Sphynx cats have?\n(a) 3\n\(b) 5\n(c) Same as hairy cats",
          answer: "c"
     },
     {
          prompt: "Which is the friendliest, most affectionate sphynx cat?\n(a) Donskoy\n\(b) Peterbald\n(c) Canadian",
          answer: "b"
     },
     {
          prompt: "Which is the largest Sphynx cat?\n(a) Peterbald\n\(b) Canadian\n(c) Donskoy",
          answer: "a"
     },
];
var score = 0;
//timeout
setTimeout(function(){alert("Time's up!");}, 7000);

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);

     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);


//dom manipulation
const body = document.body
const div = document.createElement('div')
div.innerHTML="<strong>You got a score of </strong>"+ score 
body.append(div);

var jsonObj = JSON.stringify(score);

// save to localStorage
localStorage.setItem("score", jsonObj);

// get the string
// from localStorage
var str = localStorage.getItem("score");

// convert string to valid object
var parsedObj = JSON.parse(str);

console.log(parsedObj);
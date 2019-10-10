var quotes = ["Sometimes later becomes never. Do it now.",
            "Great things never come from comfort zones.",
            "Dream it. Wish it. Do it.",
            "Success does not just find you. You have to go out and get it.",
            "Do not stop when you are tired. Stop when you are done.",
            "Do something today that your future self will thank you for.",
            "It is going to be hard, but hard does not mean impossible.",
            "Good ideas are always crazy until they are not.",
            "I think it is possible for ordinary people to choose to be extraordinary.",
            "Take risks now and do something bold. You would not regret it."];
document.body.innerHTML =  "<h1 class = \"center\">"+quotes[getQuotes(0,10)]+"</h1>";
function getQuotes(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var quotes = ["Sometimes later becomes never. Do it now.",
            "Great things never come from comfort zones.",
            "Dream it. Wish it. Do it.",
            "Success does not just find you. You have to go out and get it.",
            "Do not stop when you are tired. Stop when you are done.",
            "Do something today that your future self will thank you for.",
            "It is going to be hard, but hard does not mean impossible.",
            "Good ideas are always crazy until they are not.",
            "I think it is possible for ordinary people to choose to be extraordinary.",
            "Take risks now and do something bold. You would not regret it.",
            "The only people who never fail are those who never try.",
            "Failure is just another way to learn how to do something right.",
            "Every failure brings with it the seed of an equivalent success.",
            "Only those who dare to fail greatly can ever achieve greatly.",
            "It is hard to fail, but it is worse never to have tried to succeed.",
            "Imagination is more important than knowledge.",
            "Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Go confidently in the direction of your dreams. Live the life you have imagined.",
            "You cannot depend on your eyes when your imagination is out of focus.",
            "Commitment leads to action. Action brings your dream closer.",
            "I never think of the future",
            "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
            "Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
            "The mind that is anxious about future events is miserable.",
            "Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
            "The art of leadership is saying no, not yes. It is very easy to say yes.",
            "A leader is a dealer in hope.",
            "While a good leader sustains momentum, a great leader increases it.",
            "A general is just as good or just as bad as the troops under his command make him.",
            "To do great things is difficult; but to command great things is more difficult.",
            "Leadership does not always wear the harness of compromise.",
            "Business opportunities are like buses",
            "I avoid looking forward or backward, and try to keep looking upward.",
            "The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
            "Every artist was first an amateur.",
            "I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
            "We can do anything we want to do if we stick to it long enough.",
            "Our business in life is not to get ahead of others, but to get ahead of ourselves.",
            "Insist on yourself. Never imitate.",
            "Who looks outside, dreams. Who looks inside, awakes.",
            "It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.",
            "The only journey is the one within.",
            "Follow your honest convictions, and stay strong.",
            "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
            "Action may not always bring happiness; but there is no happiness without action.",
            "Happiness depends more on the inward disposition of mind than on outward circumstances.",
            "There is no happiness except in the realization that we have accomplished something.",
            "Happiness is not a goal, but a by-product.",
            "Happiness is not a state to arrive at, but a manner of traveling.",
            "Purpose is what gives life a meaning.",
            "The significance of a man is not in what he attains but in what he longs to attain.",
            "In all things that you do, consider the end.",
            "Life can be pulled by goals just as surely as it can be pushed by drives.",
            "The virtue lies in the struggle, not in the prize.",
            "To reach a port, we must sail",
            "Success is the child of audacity.",
            "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
            "The secret of success is to know something nobody else knows.",
            "The surest way not to fail is to determine to succeed.",
            "I cannot give you the formula for success, but I can give you the formula for failure",
            "Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.",
            "Years teach us more than books.",
            "The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.",
            "The art of being wise is knowing what to overlook.",
            "A wise man learns by the mistakes of others, a fool by his own.",
            "No man was ever wise by chance.",
            "In everything the ends well defined are the secret of durable success.",
            "Arriving at one goal is the starting point to another.",
            "A goal is a dream with a deadline.",
            "Goals are the fuel in the furnace of achievement."
        ];

// var name = "";

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var message = "<img class = \"bg\" src = \"backgrounds/"+getRandomNumber(1,26)+".jpg\">";

// message += "<h1 class=\"greet\"><b>Hello "+name+"!</b></h1>";
message += "<h1 class = \"center\">"+quotes[getRandomNumber(0,quotes.length)]+"</h1><h1 class=\"time\"><b>"+d.getDate()+" "+months[d.getMonth()]+", "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+"</b></h1>";
        
document.body.innerHTML =  message;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
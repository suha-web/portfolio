let lines = [
    "THIS IS ABOUT LOVING AND LONGING.",
    "ABOUT SHAMING AND HATING.",
    "ABOUT THE PROMISES OF KINDNESS",
    "AND",
    "THE PLEARSURE OF DOING DAMAGE.",
    "THIS IS ABOUT CRAZY DESIRE",
    "AND",
    "HAVING A GIFT OF CRUELTY.",
    "THIS IS ABOUT THE DIFFERENCE BETWEEN",
    "THE FIGURE AND THE BODY.",
    "ABOUT THE FICKLENESS OF RENOWN.",
    "ABOUT WHO GETS WHAT",
    "AND WHO OWNS WHAT.",
    "ABOUT WHO IS REMEMBERED",
    "AND WHO IS FORGOTTEN.",
    "HERE.",
    "IN THIS PLACE.",
    "THIS IS ABOUT ___.",
    "I MEAN __. ",
    "I MEAN YOU.",
];

let yOffset;
let speed = 1;

function setup(){
	createCanvas (700, 400); 
    textAlign(CENTER, CENTER);
    textFont('Arial');
    textStyle(BOLD);
    textSize(35);
    fill(255);
    yOffset = height;
}

function draw() {
    background(255, 0, 0);

    yOffset -= speed;

    for (let i = 0; i < lines.length; i++){
        let y = yOffset + i * 40; 
        text(lines[i], width /2, y);
    }

    if (yOffset + line.length * 40 < -800) {
        yOffset = height;
    }
}

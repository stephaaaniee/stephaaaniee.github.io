let playbtn=document.getElementsByClassName("option")
class Start {
    constructor() {
        this.playerName = "Player"
        this.botName = "Bot"
        this.playerOption;
        this.botOption;
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        
        if (this.botOption == "🖐" && this.playerOption == "✌" ) {
            const audio = document.getElementById("audio")
            audio.play()
            return this.winner = "Hebat! Kamu menang 😙"
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            const audio = document.getElementById("audio1")
            audio.play()
            return this.winner = "Yahhh kalah... 😤";
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            const audio = document.getElementById("audio1")
            audio.play()
            return this.winner = "Yahhh kalah... 😤";
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            const audio = document.getElementById("audio")
            audio.play()
            return this.winner = "Hebat! Kamu menang 😙"
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            const audio = document.getElementById("audio")
            audio.play()
            return this.winner = "Hebat! Kamu menang 😙"
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            const audio = document.getElementById("audio1")
            audio.play()
            return this.winner = "Yahhh kalah... 😤";
        } else {
            const audio = document.getElementById("audio2")
            audio.play()
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if (this.winner != "SERI") {
            
            return `${this.winner}`;
        } 
        else {
            
            return `WAAA ${this.winner}, GAK ADA YG MENANG 🤪`;
        }
    }
}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "..."
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `Kamu pilih ${start.getPlayerOption} VS Bot pilih${start.getBotOption}`
        result.textContent = start.matchResult();
    if (start.winner.includes("Hebat! Kamu menang 😙")) {
    launchConfetti();
    }
    }, 1500);
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.backgroundColor = randomColor();
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    document.getElementById('confetti').appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function launchConfetti() {
    for (let i = 0; i < 100; i++) { 
        createConfettiPiece();
    }
}

const play = document.getElementById("play");
const audio = document.getElementById("audio");

let totalScoreComputer = 0;
let totalScorePlayer = 0;

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "...";
    result.textContent = "...";

    setTimeout(() => {
        inGame.textContent = `Kamu pilih ${start.getPlayerOption} VS Bot pilih ${start.getBotOption}`;
        result.textContent = start.matchResult();
        
        if (start.winner.includes("Hebat! Kamu menang 😙")) {
            totalScorePlayer += 1; 
            launchConfetti(); 
            if (totalScorePlayer >= 3){
                for(let i =0; i < playbtn.length; i++){
                    playbtn[i].setAttribute("disabled", " ")
                }
                setTimeout(() => {
                    tampilkanPopup();
                    document.getElementById('score-display-computer').textContent = 'Total Skor Bot: ' + totalScoreComputer;
                    document.getElementById('score-display-player').textContent = 'Total Skor Player: ' + totalScorePlayer; 
                }, 2000);
            }   
        }

        else if (start.winner.includes("Yahhh kalah... 😤")){
            totalScoreComputer += 1;
            if (totalScoreComputer >= 3){
                for (let i = 0; i < playbtn.length; i++){
                    playbtn[i].setAttribute("disabled", " ")
                }
                setTimeout(() => {
                    tampilkanPopupkalah();
                    document.getElementById('score-display-computer').textContent = 'Total Skor Bot: ' + totalScoreComputer;
                    document.getElementById('score-display-player').textContent = 'Total Skor Player: ' + totalScorePlayer; 
                }, 2000);
            }
            
        }

        document.getElementById('score-display-computer').textContent = 'Total Skor Bot: ' + totalScoreComputer;
        document.getElementById('score-display-player').textContent = 'Total Skor Player: ' + totalScorePlayer;
    
    updateScoreDisplay();
    }, 1500);
}

function checkForWinner() {
    if (totalScorePlayer === 3) {
        tampilkanPopup(); 
    } else if (totalScoreComputer === 3) {
        tampilkanPopup();
    }
}

function tampilkanPopup() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('popup').classList.add('active');
}

function tampilkanPopupkalah() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('popupkalah').classList.add('active');
}

function tutupPopup() {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('popup').classList.remove('active');
}

function updateScoreDisplay() {
    document.getElementById('score-display-computer').textContent = 'Total Skor Bot: ' + totalScoreComputer;
    document.getElementById('score-display-player').textContent = 'Total Skor Player: ' + totalScorePlayer;
}



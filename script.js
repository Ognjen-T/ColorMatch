const counter = document.querySelector("#counter");
const TrueColorDiv = document.querySelector("#TrueColor");
const PlayerColorDiv = document.querySelector("#PlayerColor");

let R, G, B;
let i = 500;


let Red, Green, Blue;

function GenerateColor() {
    TrueColorDiv.style.display = "block";

    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);

    console.log(R, G, B);

    TrueColorDiv.style.backgroundColor = `rgb(${R},${G},${B})`;

    let brightness = (R * 299 + G * 587 + B * 114) / 1000;

    counter.style.color = brightness <= 128 ? "white" : "black";
}

function PlayerGuessColor() {
    Red = document.querySelector("#Red");
    Green = document.querySelector("#Green");
    Blue = document.querySelector("#Blue");

    const Display = document.querySelector("#Display");
    const Tick = document.querySelector("#Tick");

    let vreme = 1000;

    TrueColorDiv.style.display = "none";
    PlayerColorDiv.style.display = "flex";


    function updateColor() {
        Display.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;

        let brightness = (Red.value * 299 + Green.value * 587 + Blue.value * 114) / 1000;
        Tick.style.color = brightness <= 128 ? "white" : "black";
    }

    Red.addEventListener("input", updateColor);
    Green.addEventListener("input", updateColor);
    Blue.addEventListener("input", updateColor);

    const GameTimer = setInterval(() => {
        Tick.textContent = vreme;
        vreme--;
    }, 10);

    setTimeout(() => {
        clearInterval(GameTimer);
        Tick.style.display = "none";

        const CompareDiv = document.querySelector("#CompareDiv");
        CompareDiv.style.display = "block";
        CompareDiv.style.backgroundColor = `rgb(${R},${G},${B})`;

        Red.disabled = true;
        Green.disabled = true;
        Blue.disabled = true;

        const txt = document.querySelector("#txt");
        txt.style.display = "block";

        let brightnessPlayer = (Red.value * 299 + Green.value * 587 + Blue.value * 114) / 1000;
        txt.style.color = brightnessPlayer <= 128 ? "white" : "black";

        let brightnessPC = (R * 299 + G * 587 + B * 114) / 1000;
        document.querySelector("#PCtxt").style.color = brightnessPC <= 128 ? "white" : "black";

        setTimeout(CheckHowClose, 1200);

    }, 10000);
}

function CheckHowClose() {
    let PCColor = [R, G, B];
    let PlayerColor = [Number(Red.value), Number(Green.value), Number(Blue.value)];

    let dR = Math.abs(PCColor[0] - PlayerColor[0]);
    let dG = Math.abs(PCColor[1] - PlayerColor[1]);
    let dB = Math.abs(PCColor[2] - PlayerColor[2]);

    let Error = Math.sqrt(dR**2 + dG**2 + dB**2);
    let Max = Math.sqrt(255**2 * 3);

    let Correct = 100 * (1 - Error / Max);


    document.querySelector("#MessageBg").style.display = "flex";

    let Percent = 0;

    const procentEl = document.querySelector("#Procentage");

    let anim = setInterval(() => {
        Percent += 0.5;
        procentEl.innerHTML = Percent.toFixed(2) + "%";

        if (Percent >= Correct) {
            procentEl.innerHTML = Correct.toFixed(2) + "%";
            clearInterval(anim);
        }
    }, 10);

    console.log(Correct.toFixed(2) + "%");
}

function WatchTimer() {
    const timer = setInterval(() => {
        counter.textContent = i;
        i--;
    }, 10);

    setTimeout(() => {
        clearInterval(timer);
        counter.textContent = "";
        PlayerGuessColor();
    }, 5000);
}

function Run() {

    document.querySelector("#MessageBg").style.display = "none";

    i = 500;

    GenerateColor();
    WatchTimer();
}
const questions = [
    { question: "Kurš ir lielākais okeāns?", options: ["Klusais", "Atlantijas", "Indijas", "Dienvidu"], answer: "Klusais" },
    { question: "Kurā gadā notika pirmais mēness nolaišanās?", options: ["1965", "1969", "1972", "1959"], answer: "1969" },
    { question: "Kas ir galvaspilsēta Francijā?", options: ["Londona", "Parīze", "Berlīne", "Madride"], answer: "Parīze" },
    { question: "Cik planētu ir Saules sistēmā?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "Kurš ir ātrākais sauszemes dzīvnieks?", options: ["Leopards", "Zirgs", "Gepards", "Vilks"], answer: "Gepards" },
    { question: "Kurš izgudroja spuldzīti?", options: ["Edisons", "Teslas", "Fords", "Ņūtons"], answer: "Edisons" },
    { question: "Kura ir lielākā valsts pēc platības?", options: ["Kanāda", "ASV", "Ķīna", "Krievija"], answer: "Krievija" },
    { question: "Kurš ir pasaules garākais upe?", options: ["Amazone", "Nīla", "Daugava", "Misisipi"], answer: "Nīla" },
    { question: "Kurš ir ķīmijas simbols ūdenim?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
    { question: "Kura planēta ir pazīstama kā 'Sarkanā planēta'?", options: ["Venēra", "Marss", "Merkurs", "Jupiters"], answer: "Marss" }
];

 let laiksPalicis = 30;
 let skaits = 0;
 let jautajumaKarta = 0;
 let taimeris = null;

const taimeraDisplejs = document.getElementById("taimeris");
const jautajumaNumurs = document.getElementById("jautajumaNumurs");
const kopejieJautajumi = document.getElementById("kopejieJautajumi");
const jautajumaTeksts = document.getElementById("jautajumaTeksts");
const opcijuKonteiners = document.getElementById("opcijuKonteiners");
const pareizoSkaits = document.getElementById("pareizoSkaits");

function saktViktorinu() {
    kopejieJautajumi.textContent = questions.length;
    pareizoSkaits.textContent = "0"
    jautajumaKarta = 0;
    skaits = 0;
    ieladetJautajumus();
    saktTaimeru();
}
function saktTaimeru() {
clearInterval(taimeris);
laiksPalicis = 30;
taimeraDisplejs.textContent = laiksPalicis;
taimeris = setInterval(updateTaimeru, 1000);
}
function ieladetJautajumus() {
    if ( jautajumaKarta>= questions.length) {
        pabeigtViktorinu();
        return;
    }
    const j = questions[jautajumaKarta];
   jautajumaTeksts.textContent = j.question;
   jautajumaNumurs.textContent = jautajumaKarta + 1;
   opcijuKonteiners.innerHTML = "";

   j.options.forEach(option => {
       const btn = document.createElement("button");
       btn.textContent = option;
       btn.classList.add("option-btn");
       btn.onclick = () => {
         parbaudiAtbildi(option);
       };
       opcijuKonteiners.appendChild(btn);
   });

   saktTaimeru();
}

function parbaudiAtbildi(answer) {
    if (answer === questions[jautajumaKarta].answer) {
        skaits++;
        pareizoSkaits.textContent = skaits;
    }
    jautajumaKarta++;
    if (jautajumaKarta < questions.length) {
        ieladetJautajumus();
    } else {
        pabeigtViktorinu();
    }
}
function updateTaimeru() {
        laiksPalicis--;
        taimeraDisplejs.textContent = laiksPalicis;
        if (laiksPalicis <= 0) {
        jautajumaKarta++;
        if (jautajumaKarta < questions.length) {
            ieladetJautajumus();
    } else {
        pabeigtViktorinu();
        }
    }
}
 function pabeigtViktorinu() {
    clearInterval(taimeris);
    jautajumaTeksts.textContent = `Spēle beigusies! Tu atbildēji pareizi uz ${skaits} jautājumiem!`;
    opcijuKonteiners.innerHTML = `<button class="restart-btn" onclick="restartetViktorinu()">Spēlēt vēlreiz</button>`;
    jautajumaNumurs.textContent = "-"
    taimeraDisplejs.textContent = "-"
 }
 function restartetViktorinu() {
    saktViktorinu();
 }

 saktViktorinu();
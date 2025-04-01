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
 let taimeris;

const taimeraDisplejs = document.getElementById("taimeris");
const jautajumaNumurs = document.getElementById("jautajumaNumurs");
const kopejieJautajumi = document.getElementById("kopejieJautajumi");
const jautajumaTeksts = document.getElementById("jautajumaTeksts");
const opcijuKonteiners = document.getElementById("opcijuKonteiners");
const pareizoSkaits = document.getElementById("pareizoSkaits");

function saktViktorinu() {
    kopejieJautajumi.textContent = jautajums.garums;
    ieladetJautajumus();
    taimeris = setInterval(updateTaimeru, 1000);
}
function loadQuestion() {
    if ( jautajumaKarta>= jautajums.garums) {
        pabeigtViktorinu();
        return;
    }
    const j = questions[jautajumaKarta];
   jautajumaTeksts.textContent = j.jautajums;
   jautajumaNumurs.textContent = jautajumaKarta + 1;
   opcijuKonteiners.innerHTML = "";
   j.option.forEach(option => {
       const btn = document.createElement("button");
       btn.textContent = option;
       btn.klasesList.add("option-btn");
       btn.onclick = () => parbaudiAtbildi(option);
       opcijuKonteiners.appendChild(btn);
   });

laiksPalicis = 30;
taimeraDisplejs.textContent = taimeraDisplejs;
}
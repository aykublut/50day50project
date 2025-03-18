const rollButton = document.querySelector(".roll-button");
const diceImage = document.querySelector(".diceImage");
const listGroup = document.querySelector(".list-group");
const clearButton = document.querySelector(".clear");
//
const dice1url = "./images/Dice-1.svg"
const dice2url = "./images/Dice-2.png"
const dice3url = "./images/Dice-3.png"
const dice4url = "./images/Dice-4.png"
const dice5url = "./images/Dice-5.svg"
const dice6url = "./images/Dice-6.svg"
//


runEvents();
//
let islemSayisi = 0;
let zarDurumu = 0;

function runEvents(params) {
    rollButton.addEventListener("click", calistir);
    clearButton.addEventListener("click", temizle);
    listGroup.addEventListener("click", islemSil);

}

function calistir(params) {
    zarDurumu = Math.floor(Math.random() * 6) + 1;
    islemSayisi = islemSayisi + 1;
    if (zarDurumu === 1) {
        diceImage.setAttribute("src", dice1url)
    }
    if (zarDurumu === 2) {
        diceImage.setAttribute("src", dice2url)
    }
    if (zarDurumu === 3) {
        diceImage.setAttribute("src", dice3url)
    }
    if (zarDurumu === 4) {
        diceImage.setAttribute("src", dice4url)
    }
    if (zarDurumu === 5) {
        diceImage.setAttribute("src", dice5url)
    }
    if (zarDurumu === 6) {
        diceImage.setAttribute("src", dice6url)
    }
    addList(zarDurumu, islemSayisi);
}
function addList(zarDurumu, islemSayisi) {
    // <div class="list">İşlem 1 --- Zar 6 geldi <i class='bx bxs-dice-6'></i></div>
    const div = document.createElement("div");
    div.className = "list";
    div.textContent = `İşlem ${islemSayisi} --- Zar ${zarDurumu} geldi`;
    const i = document.createElement("i");
    i.className = `bx bxs-dice-${zarDurumu}`;
    div.appendChild(i);
    listGroup.appendChild(div);
}
function temizle(params) {
    islemSayisi = 0;
    const elemanlar = Array.from(listGroup.children);
    elemanlar.forEach((eleman) => {
        eleman.remove();
    })
}
function islemSil(e) {
    if (e.target.className === "list") {
        e.target.remove();
    }
}

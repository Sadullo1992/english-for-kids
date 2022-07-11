import PlayAudio from "./playAudio.js";

export default function StartGame(cards) {
    let playingCards = randomArrFunction(cards);
    localStorage.setItem('playingCards', JSON.stringify(playingCards));
    localStorage.setItem('wrongWordArr', JSON.stringify([]));

    let k = 0;
    Playing(k);
}

function Playing(k) { 
    if(k > 7) return;
    localStorage.setItem('playingCardNumber', k.toString());
    let cards = JSON.parse(localStorage.getItem("playingCards"));
    let card = cards[k];
    PlayAudio(card.audioSrc);  
}

function randomArrFunction(cards) {
    let randomArrIndex = [];
    let randomArrCards = [];
    for(let i = 0; i < cards.length; i++) {
        let x;
        while(x === undefined || randomArrIndex.includes(x)) {
            x = Math.floor(Math.random()*8);
        }
        randomArrIndex.push(x);
        randomArrCards.push(cards[x]);
    }

    return randomArrCards;
}

export {
    Playing 
};


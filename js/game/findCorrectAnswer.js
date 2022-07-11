import { Playing } from "./startGame.js";
import { addStar } from "./changePlayFeature.js";
import ResultGame from "./resultGame.js";
export default function FindCorrectAnswer(wordObj) {
    let k = +localStorage.getItem('playingCardNumber');
    let cards = JSON.parse(localStorage.getItem("playingCards"));
    let wrongWordArr = JSON.parse(localStorage.getItem("wrongWordArr"));
    let card = cards[k];
    let answer, audioSrc, imageSrc;
    if(card.word === wordObj.word) {
        answer = 'correct';
        audioSrc = './assets/audio/correct.mp3';
        imageSrc = './assets/img/star-win.svg';
        addStar(audioSrc, imageSrc);
        k++;        
        Playing(k);
        if(k === 8) ResultGame(wrongWordArr);
    } else {
        answer = 'wrong';
        audioSrc = './assets/audio/error.mp3';
        imageSrc = './assets/img/star.svg';
        addStar(audioSrc, imageSrc);
        wrongWordArr.push(wordObj);
        localStorage.setItem('wrongWordArr', JSON.stringify(wrongWordArr));
    }
    return answer;
}
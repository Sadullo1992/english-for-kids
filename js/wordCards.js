import WordCardItem from "./wordCardsItem.js";
import PlayGame from "./game/playGame.js";

function WordCards(cardsData) {
    const docFragment = document.createDocumentFragment();

    const h3 = document.createElement('h3');
    h3.textContent = "There is no card, it seems like empty...";
    h3.style.paddingTop = '100px';

    if(cardsData.length > 0) {
        docFragment.appendChild(PlayGame(cardsData));
        cardsData.forEach(item => docFragment.append(WordCardItem(item)));
    } else {
        docFragment.append(h3);
    }    

    return docFragment;
}

export default WordCards;
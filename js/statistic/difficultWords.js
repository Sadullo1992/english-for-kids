import cards from "../cards.js";

export default function DifficultWords() {
    const data = [].concat.apply([], cards);
    let difficultWords = filterDifficultWords();    
    let arr = [];

    difficultWords = difficultWords.length > 8 ? difficultWords.slice(0, 8) : difficultWords;

    difficultWords.forEach(item => {
        let obj = data.find(card => card.word === item.word);
        arr.push(obj);
    })
        
    return arr;
}

function filterDifficultWords() {
    let statisticData = JSON.parse(localStorage.getItem("statisticData"));
    statisticData = [].concat.apply([], statisticData);  

    return statisticData.filter(item => item.wrong > 0).sort((a, b) => b.wrong - a.wrong);
}

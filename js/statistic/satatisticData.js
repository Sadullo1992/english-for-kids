import cards from "../cards.js";

export default function StatisticData() {
    let statisticData = [];
    
    for(let i = 0; i < cards.length - 1; i++) {
        let arr = [];
        cards[i+1].forEach(item => {
            let obj = {};
            obj.word = item.word;
            obj.translation = item.translation;
            obj.train = 0;
            obj.play = 0;
            obj.wrong = 0;
            obj.error = 0;

            arr.push(obj);
        });

        statisticData.push(arr);
    }
    localStorage.setItem('statisticData', JSON.stringify(statisticData));
}

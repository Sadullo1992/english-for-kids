export default function SetStatistic(wordObj, mode) {
    let statisticData = JSON.parse(localStorage.getItem("statisticData"));
    for(let arr of statisticData) {
        arr.forEach(item => {
            if(item.word === wordObj.word && item.translation === wordObj.translation) {
                if(mode === 'train') {
                    item.train++;
                    localStorage.setItem('statisticData', JSON.stringify(statisticData));
                } else {
                    item.play++;
                    item.wrong = item.play - 1;
                    item.error = Math.round((item.wrong / item.play) * 100);
                    localStorage.setItem('statisticData', JSON.stringify(statisticData));
                }
            }
        });
    }
    
}
export default function SetStatistic(wordObj, mode) {
    let statisticData = JSON.parse(localStorage.getItem("statisticData"));
    for(let arr of statisticData) {
        arr.forEach(item => {
            if(item.word === wordObj.word && item.translation === wordObj.translation) {
                if(mode === 'train') {
                    item.train++;
                } else {
                    if(mode === 'play'){
                        item.play++;                                    
                    } else {
                        item.wrong++;   
                    }                
                    item.error = Math.round((item.wrong / item.play) * 100);
                }                
                localStorage.setItem('statisticData', JSON.stringify(statisticData));
            }
        });
    }
    
}
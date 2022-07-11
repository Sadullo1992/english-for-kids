export default function SortTable() {
    const tableHeads = document.querySelectorAll('.th');
    tableHeads.forEach(item => {        
        item.addEventListener('click', (e) => { 
            if(e.target !== item) {
                let key = item.firstChild.textContent.replace(/[^a-zA-Z]+/g, '').toLocaleLowerCase();
                let sortType = e.target.firstChild.textContent;
                SortColFunction(sortType, key);
            }           
        })
    })
}

function SortColFunction(sortType, key) {
    let statisticData = JSON.parse(localStorage.getItem("statisticData"));
    let sortArr = [];
    for(let arr of statisticData) {
        if(key === "word" || key === "translation") {
            arr.sort((a, b) => {
                if ( a[key] < b[key] ){
                    return -1;
                }
                if ( a[key] > b[key] ){
                    return 1;
                }
                return 0;
                });
        } else {
            arr.sort((a, b) => a[key] - b[key]);
        }
        if(sortType === "descending") arr.reverse();
        sortArr.push(arr);
    }

    localStorage.setItem('statisticData', JSON.stringify(sortArr));
    window.location = '#';
    window.location = '#statistic';
}

function Table(data) {
    const docFragment = document.createDocumentFragment();
    
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    const table = document.createElement('table');

    const tHead = document.createElement('tr');
    tHead.classList.add('table-head');

    const thWord = document.createElement('th');
    thWord.classList.add('th');
    thWord.innerHTML = "Word <ul><li>ascending</li><li>descending</li></ul>"


    const thTranslation = document.createElement('th');
    thTranslation.classList.add('th');
    thTranslation.innerHTML = 'Translation <ul><li>ascending</li><li>descending</li></ul>';

    const thTrain = document.createElement('th');
    thTrain.classList.add('th');
    thTrain.innerHTML = 'Train <ul><li>ascending</li><li>descending</li></ul>';

    const thPlay = document.createElement('th');
    thPlay.classList.add('th');
    thPlay.innerHTML = 'Play <ul><li>ascending</li><li>descending</li></ul>';

    const thWrong = document.createElement('th');
    thWrong.classList.add('th');
    thWrong.innerHTML = 'Wrong <ul><li>ascending</li><li>descending</li></ul>';

    const thError = document.createElement('th');
    thError.classList.add('th');
    thError.innerHTML = '% error <ul><li>ascending</li><li>descending</li></ul>';

    tHead.append(thWord);
    tHead.append(thTranslation);
    tHead.append(thTrain);
    tHead.append(thPlay);
    tHead.append(thWrong);
    tHead.append(thError);

    table.append(tHead);

    let statisticData = JSON.parse(localStorage.getItem("statisticData"));

    for(let i = 0; i < data.length-1; i++) {
        table.append(TableCategoryName(data[0][i]));
        table.append(TableCategory(statisticData[i]));
    }
    
    tableContainer.append(table);

    docFragment.append(tableContainer);
    return docFragment;
}

export default Table;

function TableCategoryName(categoryName) {
    const docFragment = document.createDocumentFragment();

    const trCatName = document.createElement('tr');
    trCatName.classList.add('table-category-name');    

    const thCatName = document.createElement('th');
    thCatName.setAttribute('colspan', '6');
    thCatName.textContent = `${categoryName.title}`;

    trCatName.append(thCatName);
    
    docFragment.append(trCatName);
    return docFragment;
}

function TableCategory(categoriesItems) {
    const docFragment = document.createDocumentFragment();

    categoriesItems.forEach(item => docFragment.append(TableCategoryItem(item)));

    return docFragment;
}

function TableCategoryItem(catItem) {
    const docFragment = document.createDocumentFragment();

    const trCatItem = document.createElement('tr');
    trCatItem.classList.add('table-category-item');

    const tdWord = document.createElement('td');
    tdWord.textContent = `${catItem.word}`;

    const tdTranslation = document.createElement('td');
    tdTranslation.textContent = `${catItem.translation}`;

    const tdTrain = document.createElement('td');
    tdTrain.textContent = `${catItem.train}`;

    const tdPlay = document.createElement('td');
    tdPlay.textContent = `${catItem.play}`;

    const tdWrong = document.createElement('td');
    tdWrong.textContent = `${catItem.wrong}`;

    const tdError = document.createElement('td');
    tdError.textContent = `${catItem.error}`;

    trCatItem.append(tdWord);
    trCatItem.append(tdTranslation);
    trCatItem.append(tdTrain);
    trCatItem.append(tdPlay);
    trCatItem.append(tdWrong);
    trCatItem.append(tdError);

    docFragment.append(trCatItem);

    return docFragment;
}
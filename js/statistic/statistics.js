import Table from "./table.js";
import StatisticData from "./satatisticData.js";

export default function Statistics(data) {
    const docFragment = document.createDocumentFragment();

    const btnTrain = document.createElement('button');
    btnTrain.classList.add('btn', 'btn-difficult');
    btnTrain.textContent = 'Train difficult';
    btnTrain.addEventListener('click', () => {
        window.location = "#difficult";
    });

    const btnReset = document.createElement('button');
    btnReset.classList.add('btn', 'btn-reset');
    btnReset.textContent = 'Reset statistic';
    btnReset.addEventListener('click', () => {
        StatisticData();
        window.location = '#';
        window.location = '#statistic';
    }, false);

    docFragment.append(btnTrain);
    docFragment.append(btnReset);

    docFragment.append(Table(data))

    return docFragment;
}
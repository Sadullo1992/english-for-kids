import { setActiveLink } from "./Header.js";
import cards from './cards.js';
import Categories from './categories.js';
import WordCards from './wordCards.js';
import Statistics from "./statistic/statistics.js";
import StatisticData from "./statistic/satatisticData.js";
import DifficultWords from "./statistic/difficultWords.js";
import SortTable from "./statistic/sortTable.js";

import '../css/style.css';

const categoryContainer = document.querySelector('.category-container');
const routes = ["", "#action-1", "#action-2", "#animal-1", "#animal-2", "#clothes", "#emotions", "#vehicle", "#educational", "#statistic", "#difficult"];

let statisticData = JSON.parse(localStorage.getItem("statisticData"));
if(statisticData === null) {
    StatisticData();
}
if(Array.isArray(statisticData)) {
   if(statisticData.length !== cards.length - 1) {
    StatisticData();
   }
}

window.addEventListener('load', () => {
    window.location = "#";    
    ContentRender();
});

const Router = () => {
    let index; 
    index = routes.findIndex(item => window.location.hash === item);
    index = index === -1 ? 0 : index;     
    setActiveLink(routes[index]);
    ContentRender(index);
}
window.addEventListener('hashchange', Router, false);

function ContentRender(index = 0) {
    while (categoryContainer.firstChild) {
        categoryContainer.removeChild(categoryContainer.firstChild);
    }
    if(index === 0){
        categoryContainer.append(Categories(cards[0]));
    } else if(index === routes.length-2) {
        categoryContainer.append(Statistics(cards));
        SortTable();
    } else if(index === routes.length-1) {
        let words = DifficultWords();
        categoryContainer.append(WordCards(words));
    } else {
        categoryContainer.append(WordCards(cards[index]));
    }
}




export {
    routes,
};
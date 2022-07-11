import cards from "./cards.js";
import { routes } from "./index.js";

export default function Directory(title) {
    let index;
    index = cards[0].findIndex(item => item.title === title);
    window.location = routes[index+1];
}
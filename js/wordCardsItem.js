import FindCorrectAnswer from "./game/findCorrectAnswer.js";
import SetStatistic from "./statistic/setStatistic.js";

export default function WordCardItem(obj) {
    const {word, translation, image, audioSrc} = obj;
    const docFragment = document.createDocumentFragment();

    const wordCard = document.createElement('div');
    wordCard.classList.add("category-item", "card");
    wordCard.addEventListener('mouseleave', () => {
        wordCard.style.transform = 'rotateY(0deg)';
    });

    const cardFront = document.createElement('div');
    cardFront.classList.add("card-front");
    cardFront.style.opacity = '1';
    cardFront.addEventListener('click', (e) => {
        let isTrain = localStorage.getItem('train');
        let isRun = localStorage.getItem('run');
        if(isTrain === "true") {            
            audio.play();
            SetStatistic(obj, 'train');
        }
        if(isRun === 'true' && e.currentTarget.style.opacity === '1') {
           let answer = FindCorrectAnswer(obj);
           SetStatistic(obj, 'play');
           if(answer === "correct") {
                e.currentTarget.style.opacity = '0.5';
           }
        }
    });

    const imgF = document.createElement('img');
    imgF.setAttribute('src', image);
    imgF.setAttribute('alt', word);

    const wordItemTitle = document.createElement('div');
    wordItemTitle.classList.add("category-item-title");
    wordItemTitle.textContent = `${word}`;

    const imgRotate = document.createElement('img');
    imgRotate.setAttribute('src', './assets/img/rotate.svg');
    imgRotate.setAttribute('alt', 'rotate');
    imgRotate.classList.add('rotate-photo');
    imgRotate.addEventListener('click', (e) => {
        e.stopPropagation();
        wordCard.style.transform = 'rotateY(180deg)';
        wordCard.style.transition = 'transform 0.6s';
        SetStatistic(obj, 'train');
    });

    const audio = document.createElement('audio');
    audio.setAttribute('src', audioSrc);

    const cardBack = document.createElement('div');
    cardBack.classList.add("card-back");

    const imgB = document.createElement('img');
    imgB.setAttribute('src', image);
    imgB.setAttribute('alt', word);

    const wordItemBackTitle = document.createElement('div');
    wordItemBackTitle.classList.add("category-item-title");
    wordItemBackTitle.textContent = `${translation}`;

    wordItemTitle.append(imgRotate);

    cardFront.append(imgF);
    cardFront.append(wordItemTitle); 
    cardFront.append(audio); 

    cardBack.append(imgB); 
    cardBack.append(wordItemBackTitle); 

    wordCard.append(cardFront); 
    wordCard.append(cardBack); 

    docFragment.append(wordCard);

    return docFragment;
}
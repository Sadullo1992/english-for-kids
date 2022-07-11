import StartGame from "./startGame.js";
import ChangePlayFeature from "./changePlayFeature.js";

export default function PlayGame(cardsData) {
    const docFragment = document.createDocumentFragment();
    
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn-start');
    startBtn.setAttribute('id', 'btn-start')
    startBtn.innerHTML = 'Start';

    localStorage.setItem('run', 'false'); 

    startBtn.addEventListener('click', () => {
        if(localStorage.getItem('run') === 'false') {
            localStorage.setItem('run', 'true');            
            StartGame(cardsData); 
            ChangePlayFeature(); 
        } else {
            audio.play();
        }
    });

    const audio = document.createElement('audio');
    audio.setAttribute('id', 'word-audio');

    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');

    const starAudio = document.createElement('audio');
    starAudio.setAttribute('id', 'star-audio');

    starContainer.append(starAudio);

    docFragment.append(startBtn);
    docFragment.append(audio);
    docFragment.append(starContainer);
    return docFragment;
}
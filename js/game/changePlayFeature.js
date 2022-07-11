export default function ChangePlayFeature() {
    const gameStartBtn = document.getElementById('btn-start'); 
    const frontCards = document.querySelectorAll('.card-front');
    const starImgs = document.querySelectorAll('.star-photo');

    // clear star images
    starImgs.forEach(item => {
        item.remove();
    })
       
    // change start btn feature
    if(gameStartBtn === null) return;
    let isRun = localStorage.getItem('run');
    if(isRun === 'true'){
        gameStartBtn.innerHTML = '<img src="./assets/img/repeat.svg" alt="repeat">';
    } else {
        gameStartBtn.innerHTML = 'Start';
    }

    // remove opacity
    frontCards.forEach(item => {
        item.style.opacity = '1';
    })    
}

function addStar(audioSrc, imageSrc) {
    const starContainer = document.querySelector('.star-container');
    const starAudio = document.getElementById('star-audio');

    starAudio.setAttribute('src', audioSrc);
    starAudio.play();

    const img = document.createElement('img');
    img.classList.add('star-photo');
    img.setAttribute('src', imageSrc);
    img.setAttribute('alt', 'star');

    starContainer.prepend(img);
}

export {
   addStar 
};
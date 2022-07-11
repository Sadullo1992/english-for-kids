export default function ResultGame(wrongArr) {
    resultMessage(wrongArr.length);
}

function resultMessage(error) {
    const container = document.getElementById('container'); 
    container.style.backgroundColor = '#fff';

    const message = document.createElement('div');
    message.classList.add('message');

    const h1 = document.createElement('h1');

    const img = document.createElement('img');
    img.classList.add('star-photo');
    img.setAttribute('alt', 'result');   
    
    const audio = document.createElement('audio');

    if(error === 0) {
        h1.textContent = 'You are win!!!';
        img.setAttribute('src', './assets/img/success.jpg');
        audio.setAttribute('src', './assets/audio/success.mp3');
    } else {
        h1.innerHTML = `<span>${error} error</span>, you are failure, try again!`;
        img.setAttribute('src', './assets/img/failure.jpg');
        audio.setAttribute('src', './assets/audio/failure.mp3');
    }
    
    message.append(h1);
    message.append(img);
    message.append(audio);

    container.prepend(message);

    audio.play();

    setTimeout(() => {
        message.remove();
        location.reload();
    }, 3000);
    
}
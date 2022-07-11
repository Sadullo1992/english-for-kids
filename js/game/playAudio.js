export default function PlayAudio(src) {
    const wordAudio = document.getElementById('word-audio'); 
    wordAudio.setAttribute('src', src);
    wordAudio.play();
}
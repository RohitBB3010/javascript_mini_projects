const inputTextEl = document.querySelector('.textarea');
const charactersEl = document.querySelector('.stat__number--characters');
const wordsEL = document.querySelector('.stat__number--words');
const facebookEl = document.querySelector('.stat__number--facebook');
const twitterEl = document.querySelector('.stat__number--twitter');

inputTextEl.addEventListener('input', function (){

    const inputLength = inputTextEl.value.length;
    let numberOfWords = inputTextEl.value.trim().length > 0 
    ? inputTextEl.value.replace(/\s\s+/g, ' ').split(/\s+/).filter(Boolean).length
    : 0;

    const twitterCharLeft = 280-inputLength;
    const facebookCharLeft = 2200-inputLength;

    if(inputTextEl.value.length === 0){
        numberOfWords = 0;
    }

    if(twitterCharLeft < 0){
        twitterEl.classList.add('stat__number--limit');
    } else{
        twitterEl.classList.remove('stat__number--limit');
    }

    if(facebookCharLeft < 0){
        facebookEl.classList.add('stat__number--limit');
    } else {
        facebookEl.classList.remove('stat__number--limit');
    }

    charactersEl.innerHTML = inputLength;
    facebookEl.textContent = facebookCharLeft;
    twitterEl.textContent = twitterCharLeft;
    wordsEL.textContent = numberOfWords;
});

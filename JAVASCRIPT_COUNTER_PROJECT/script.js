const increaseButtonEl = document.querySelector('.counter__button-increase');
const decreaseButtonEl = document.querySelector('.counter__button-decrease');
const valueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const titleEl = document.querySelector('.counter__title');
const board = document.querySelector('.counter');

const incrementCounter = () => {

    let currentValue = valueEl.textContent;
    currentValue = +currentValue;

    console.log(currentValue);
    console.log(increaseButtonEl);

    if(currentValue < 5){
        currentValue++;
    } else {
        titleEl.innerHTML = 'Buy <b>pro</b> for > 5';
        board.classList.add('counter__limit');

    }

    valueEl.textContent = currentValue;
}

const decrementCounter = () => {

    let currentValue = valueEl.textContent;
    currentValue = +currentValue;

    console.log(currentValue);
    console.log(increaseButtonEl);

    if(currentValue > 0){
        if(currentValue == 5){
            titleEl.textContent = 'FANCY COUNTER';
            board.classList.remove('counter__limit');
        }
        currentValue--;
    }

    valueEl.textContent = currentValue;
}

resetButtonEl.addEventListener('click', () => {

    titleEl.textContent = 'FANCY COUNTER';
    valueEl.textContent = '0';
    board.classList.remove('counter__limit');
});

increaseButtonEl.addEventListener('click', incrementCounter);
decreaseButtonEl.addEventListener('click', decrementCounter);

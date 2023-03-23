const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const container = document.querySelector('.container')

const randomDice = () => {

    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {

    dice.style.animation = 'rolling 4s';
    let num;

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                num=1;
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                num=6;
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                num=2;
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                num=5;
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                num=3;
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                num=4;
                break;

            default:
                break;
        }

        dice.style.animation = 'none';
      
        switch (num) {
            case 1:
                container.querySelector('p').innerHTML='You will find love on flag day'
                break;

            case 6:
                container.querySelector('p').innerHTML='I see money in your future. Although it is not yours.'
                break;

            case 2:
                container.querySelector('p').innerHTML='Love and cough, cannot be hidden.'
                break;

            case 5:
                container.querySelector('p').innerHTML='Age is something that does not matter, unless you are a cheese.'
                break;

            case 3:
                container.querySelector('p').innerHTML='Never put off until tomorrow what you can do the day after tomorrow.'
                break;

            case 4:
                container.querySelector('p').innerHTML='One who got up early, a dollar was found. But he got up early, the one who lost it.'
                break;

            default:
                break;
        }

    }, 4050);

}

rollBtn.addEventListener('click', randomDice);
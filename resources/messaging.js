//The anti sykemelding bot.
//Messages variable array asking you random questions that will make you feel better if you do it. 

const messages = [
    'Have you exercised today?',
    'Did you go outside?',
    'Did you talk to anyone?',
    'Did you eat well?',
    'Did you limit your scrolling time?',
    'Did you make any plans?',
    'Did you drink enough water?',
    'Did you get enough sleep?',
];

const randomMessage = () => {
    const index = Math.floor(Math.random() * messages.length)
    return messages[index]
};

let isFirstClick = true;

function displayMessage() {
    const message = randomMessage();
    console.log(message)
    document.getElementById('messageDisplay').textContent = message;

    if (isFirstClick) {
        document.getElementById('additionalText').classList.remove('hidden');
        isFirstClick = false;
    }
};



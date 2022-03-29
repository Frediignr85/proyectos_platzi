const messages = [
    'Fredy',
    'Tatiana',
    'Kevin',
    'Antonio',
    'Daniel',
    'Carolina',
    'Fernando',
    'Estela'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };
const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const authorButton = document.querySelector("#js-show-author");
authorButton.addEventListener('click', getAuthor);

const endpoint = "https://type.fit/api/quotes";

let currentQuote = null;

async function getQuote() {
    var number = getRandomInt(1000);
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        currentQuote = json[number];
        displayQuote(currentQuote.text);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = `"${quote}"`;
}

async function getAuthor() {
    if (!currentQuote) {
        return;
    }
    try {
        const author = currentQuote.author || 'Unknown';
        displayAuthor(author);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch author');
    }
}

function displayAuthor(author) {
    const authorText = document.querySelector("#js-author-text");
    authorText.textContent = author;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getQuote();

  
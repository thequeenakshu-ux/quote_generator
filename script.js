const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Unknown" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteEl.textContent = `"${randomQuote.text}"`;
    authorEl.textContent = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener('click', displayRandomQuote);

// Display one quote on page load
window.onload = displayRandomQuote;
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const button = document.querySelector('.new-quote');

const quotes = [
    {
        quote: '"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."',
        person: 'Abraham Lincoln'
    },

    {
        quote: '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
        person: 'Martin Fowler'
    },

    {
        quote: '“First, solve the problem. Then, write the code.”',
        person: 'John Johnson'
    },

    {
        quote: '“Experience is the name everyone gives to their mistakes.”',
        person: 'Oscar Wilde'
    },

    {
        quote: '“ In order to be irreplaceable, one must always be different”',
        person: 'Coco Chanel'
    },

    {
        quote: '“Java is to JavaScript what car is to Carpet.”',
        person: 'Chris Heilmann'
    },

    {
        quote: '“Knowledge is power.”',
        person: 'Francis Bacon'
    },

    {
        quote: '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”',
        person: 'Dan Salomon'
    },

    {
        quote: '“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”',
        person: 'Antoine de Saint-Exupery'
    },

    {
        quote: '“Ruby is rubbish! PHP is phantastic!”',
        person: 'Nikita Popov'
    },

    {
        quote: '“ Code is like humor. When you have to explain it, it’s bad.”',
        person: 'Cory House'
    },

    {
        quote: '“Fix the cause, not the symptom.”',
        person: 'Steve Maguire'
    },

    {
        quote: '“Optimism is an occupational hazard of programming: feedback is the treatment.”',
        person: 'Kent Beck'
    },
];

const generateQuote = (e) => {
    const random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}

button.addEventListener('click', generateQuote)
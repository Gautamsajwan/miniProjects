const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1388fcc772msheb3088649a8b7e6p18b42bjsna54e101199e5',
		'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
	}
};

const getQuote = async() => {
    try {
        const response = await fetch('https://random-quote-generator2.p.rapidapi.com/randomQuote', options)
        const data = await response.json()
        console.log(data)
        const quote = data[0].Quote
        const author = data[0].Author
        updateDom(quote, author)
    } catch(error) {
        console.log(error)
    }
}

const updateDom = (quote, author) => {
    const quoteDiv = document.querySelector('.quote')
    const authorDiv = document.querySelector('.author')

    quoteDiv.innerHTML = `<q> ${quote} </q>`
    authorDiv.innerText = `~ ${author}`
}

const newQuoteBtn = document.querySelector('.newQuote')
newQuoteBtn.addEventListener('click', () => {
    getQuote()
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getQuote()
    }
})

getQuote()
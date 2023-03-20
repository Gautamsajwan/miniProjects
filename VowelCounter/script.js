const form = document.querySelector('.form')
const result = document.querySelector('.result')
const input = document.querySelector('.input')
const data = document.querySelector('.data')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(input.value == '') {
        alert("you haven't entered any text")
        return
    }
    
    let count = 0
    const vowels = ['a','e','i','o','u']
    const str = input.value.toLowerCase()
    
    for(let char of str) {
        if(vowels.includes(char)) {
            count++
        }
    }

    // console.log(str)
    // console.log('the no. of vowels is : ',count)
    data.innerHTML = `<q> ${input.value} </q>`
    result.classList.add('resultStyle')
    result.innerText = `The no. of vowels in the given input is : ${count}`
    input.value = ''
})
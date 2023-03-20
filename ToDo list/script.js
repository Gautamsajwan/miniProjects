const form = document.querySelector('.form')
const task = document.querySelector('.input')
const container = document.querySelector('.task-container')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(task.value == '') {
        return
    }
    
    const todoElement = document.createElement('li')
    todoElement.innerHTML = `<span>${task.value}</span>`
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remove'
    const doneBtn = document.createElement('button')
    doneBtn.innerText = 'Done'
    const btnWrapper = document.createElement('div')
    btnWrapper.classList.add('btnWrapper')
    
    removeBtn.addEventListener('click', () => {
        // removeBtn.parentElement.parentElement.remove()
        // or more efficiently
        removeBtn.closest('.list-item').remove()
    })
    
    doneBtn.addEventListener('click', () => {
        if(todoElement.classList.contains('done')) {
            todoElement.classList.remove('done')
        } else {
            todoElement.classList.add('done')
        }
    })

    todoElement.classList.add('list-item')

    doneBtn.classList.add('btn')
    doneBtn.classList.add('mark')

    removeBtn.classList.add('btn')
    removeBtn.classList.add('remove')
    
    btnWrapper.appendChild(doneBtn)
    btnWrapper.appendChild(removeBtn)
    todoElement.appendChild(btnWrapper)
    container.appendChild(todoElement)

    task.value = ''
})
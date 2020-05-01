'use strict'
const input = document.querySelector("input[type='text']")
const ul = document.querySelector(".tasks__list")

const array = []

const addTodo = function () {
    const li = document.createElement('li')
    const obj =
        {
            id: i,
            title: input.value,
            checked: false
        }
    const idGenerate = function(){
        let i = 0
        i +=1
        obj.id = i
    }
    console.log(idGenerate())
    li.classList.add('task__item')
    li.append(obj.title)
    array.push(obj)
    if (obj) {
        ul.appendChild(li)
    }

}

const checkedTask = function (event, obj) {
    const task = event.target
    if (!task.classList.contains('done')) {
        task.classList.add('done')
        let objDone = obj
        console.log(objDone)
    } else {
        task.classList.remove('done')
    }
}
console.log(array)

ul.addEventListener("click", function (event) {
    checkedTask(event)

})
input.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        addTodo()
    }
})


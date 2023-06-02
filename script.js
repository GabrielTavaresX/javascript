const listElement = document.querySelector("#app ul")
const inputElemet = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const tarefas = JSON.parse(localStorage.getItem("list")) || []

function renderTarefas() {
    listElement.innerHTML = ""
    for (const iterator of tarefas) {
        console.log(iterator)
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(iterator)
        
        const linkElement = document.createElement("a")
        listElement.setAttribute("href", "#")

        const pos = tarefas.indexOf(iterator)
        linkElement.setAttribute("onclick", `deleteTarefa(${pos})`)

        const linktext = document.createTextNode("Excluir ")
        linkElement.appendChild(linktext)
        
        tarefaElement.appendChild(linkElement)
        tarefaElement.appendChild(tarefaText)
        listElement.appendChild(tarefaElement)
    }
}
renderTarefas()

function addTarefas() {
    const tarefaText = inputElemet.value
    console.log(tarefaText)
    tarefas.push(tarefaText)
    renderTarefas()
    saveToStorage()
}
buttonElement.onclick = addTarefas

function deleteTarefa(pos) {
    tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()
}

function saveToStorage () {
    localStorage.setItem("list", JSON.stringify(tarefas))
}
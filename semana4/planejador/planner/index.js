// Exercicios planejador semanal

function botaoTarefa(){
    console.log('Cliquei no botão!!!')
    let diaSemana = document.getElementById("dias-semana").value
    let inputTarefa = document.getElementById("tarefa").value
    let inputHora = document.getElementById("dia-horas").value //input de hora da tarefa
    document.getElementById(diaSemana).innerHTML += `<p> ${inputTarefa} às ${inputHora} </p>`
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"

    if(inputTarefa === ""){
        alert('Coloque uma tarefa válida!')
    }
}
// Está limpando as tarefas dos respectivos dias escolhidos.Um dia por vez.
function limparTarefas(){
    let diaSemana = document.getElementById("dias-semana").value
    document.getElementById(diaSemana).innerHTML = ''
}


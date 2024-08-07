let contador = 0
let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')
function addTarefa() {

    let valorInput = input.value;

    if   ((valorInput !=="") && (valorInput !==null) && (valorInput !== undefined)) {

        ++contador;


        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;


            main.innerHTML += novoItem;          
            
            input.value = "";
            input.focos();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class');
    console.log(classe)
    if (classe=="item") {
        item.classList.add('clicado')
        
       


        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-outline')
        icone.classList.add('mdi-circle-outline');
       
    } else {
        item.classList.remove('clicado')


        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-outline'); 
    };
}

    input.addEventListener("keyup", function (event) {
        //SE TECLOU ENTER (13)
        if (event.keyCode === 13) {
          event.preventDefault();
          btnAdd.click();
        }
      });
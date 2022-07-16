function adicionar(){
    let itemInput = document.querySelector('#input-area').value;
    let listaHTML = document.querySelector('.lista').innerHTML;
    if(itemInput !=0 ){
        listaHTML += '<div class="lista-area"><input type="checkbox" class="checkbox"> <div class="item">'+itemInput+'</div></div>';
        document.querySelector('.lista').innerHTML = listaHTML;
        limpar();
    }
}

function limpar(){
    document.querySelector('#input-area').value = "";
}
1 //Função que envia os dados para o servdor Json
//POST - CREATE
function enviarDados(){
    //Obter os valores do input
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    //Enviar o dados para o servidor utilizando o FETCH
    fetch('http://localhost:3000/pessoas', {
        method:'POST',      //Método HTTP utilizando o POST
        headers: {
            'Content-Type': 'application/json' //Tipo do  conteúdo enviado Json
        },
        body: JSON.stringify({nome: nome, senha: senha,}) //Dados a serem enviados
    }).then(resposta => resposta.json())

}
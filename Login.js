//GET - READ
function fazerLogin(){

    //obter os valores do input
    let nome= document.getElementById('nome').value
    let senha= document.getElementById('senha').value

    //Fazer a requesição GET - READ e buscar em pessoa
    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json())
    .then(dados => {
        //Buscar o usuario e senha que foram digitados e que são existentes JSON- FIND
        let usuario = dados.find(pessoas => pessoas.nome == nome && pessoas.senha == senha)
        if(usuario) {
            window.location.href = 'bemvindo.html'
        } else {
            alert("Usuário/Senha incorretos! Tente novamente!")
        }
    })

}
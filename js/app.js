let dados = document.querySelector("#dados")

// controle de sessão.
auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){

        window.location.pathname="home.html"

    } else {
        dados.style.display = "none"
    }
})

// Pega os dados referente ao cadastro
let emailCad = document.querySelector("#emailCad")
let senhaCad = document.querySelector("#senhaCad")
let senhaCad2 = document.querySelector("#senhaCad2")
let btnCad =  document.querySelector("#btnCad")

// Chama a função cadastrar() ao clicar no botão de cadastro
btnCad.addEventListener("click", cadastrar ) 

// Chama a função cadastrar
function cadastrar(){

    // Verifica se as duas senhas digitadas são iguais
    if (senhaCad.value === senhaCad2.value) {

        // Cria um usuario com email e senha passadas
        // codigo do firebase
        auth.createUserWithEmailAndPassword(emailCad.value, senhaCad.value).
        then(function(user){ console.log(auth.currentUser.email)},
            function(error){ console.log(error.message)})    
    }    
}

// Pega os dados referentes ao login do usuario
let emailEntrar = document.querySelector("#emailEntrar")
let senhaEntrar = document.querySelector("#senhaEntrar")
let btnEntrar =  document.querySelector("#btnEntrar")
let btnGoogle =  document.querySelector("#btnGoogle")

// Chama a função entrar() ao clicar no botão 'entrar'
btnEntrar.addEventListener("click", entrar)


// Cria função entrar() que irá fazer a autenticação no firebase
function entrar(){

    // Loga utilizando o email e senha passados pelo usuario
    auth.signInWithEmailAndPassword(emailEntrar.value, senhaEntrar.value)
}


// capturar evento click no botão Google
btnGoogle.addEventListener("click", () => {
    
    // criar instancia do objeto Google provider auth
    let provider = new firebase.auth.GoogleAuthProvider()
    signIn(provider)
})

//  funcao para fazer login via firebase com provider (google , github, microsoft)
function signIn(provider) {

    //abrir popup na tela com autenticação do provider
    firebase.auth().signInWithPopup(provider).then(function(resultado){

        console.log(resultado)

    }).catch(function(error){

        console.log(error)
        alert("falha na autenticação")
        
    })
}
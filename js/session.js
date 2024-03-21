let dados = document.querySelector("#dados")
let perfil = document.querySelector("#perfil")
let foto = document.querySelector("#foto")

// controle de sessão.
auth.onAuthStateChanged(firebaseUser => {  //Quando houver alguma alteração no status do firebase

    // Se houver um usuario logado
    if(firebaseUser){
        console.log(auth.currentUser.email + " logado" )
        dados.style.display = "block"
        perfil.innerHTML = auth.currentUser.email
        
        
        // Se houver uma foto cadastrada na conta
        if (auth.currentUser.photoURL) {
            foto.innerHTML = "<img src='"+ auth.currentUser.photoURL + "'>"
        }
    } else {  // Caso não haja um usuário logado
        dados.style.display = "none"
        window.location.pathname="/"
    }
})

// Cria o botão sair (desloga da conta)
let btnSair = document.querySelector("#btnSair")
btnSair.addEventListener("click", () => {
   auth.signOut() 
})

// Chama a função listarMusica()
listarMusicas()

// Cria a função que listará as musicas
function listarMusicas() {

    // Link com o arquivo Json onde esta as musicas cadastradas
    const url="https://etec24-3dc8c-default-rtdb.firebaseio.com/musicas.json"

    // Configura as opções para conectar no Json
    const options ={
        method: "GET",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json;charset=utf-8',
        }
    }

    fetch(url,options)
    .then(response => response.json())
    .then(
        dados => {

            // Mostra os dados do Json
            console.log(dados)

            // Pega os dados do html
            let lista = document.querySelector("#listaMusicas")
            let tbody = lista.querySelector('tbody')

            // deixa o tbody vazio
            tbody.innerHTML='';

            // Para cada chave dentro do arquivo json
            for (let chave in dados) {

                // Pega pega o item dentro da chave
                let item = dados[chave]

                // Cria um elemento html 'tr' e aramazena na variavel
                let linha = document.createElement('tr')

                // Coloca elementos dentro do <tr></tr>
                linha.innerHTML = `
                <td>${item.faixa}</td>
                <td>${item.cantor}</td>
                <td>${item.estrelas}</td>
                `
                // Coloca o conteudo criado dentro do 'tbody'
                tbody.appendChild(linha)
            }
        }
    )
}
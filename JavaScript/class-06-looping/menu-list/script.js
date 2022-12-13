const listItens = []
let menuOption

while (true) {
    menuOption = prompt(`
    Digite a opção desejada:
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `)

    if (menuOption === '4' || menuOption === null) {
        break;
    }

    if (menuOption === '') {
        alert("Por favor, escolha uma opção!")
        continue;
    }

    switch (menuOption) {
        case '1':
          
           while (true) {
            let item = prompt("Digite o nome do item")
                                    
                if (item === null) {
                    break;
                }

                if (item === '') {
                    alert("Por favor, digite o nome para cadastrar!")
                    continue;
                }

                if (listItens.includes(item)) {
                    alert("Item já cadastrado!")
                    
                } else {
                    listItens.push(item)
                    alert(`"${item} cadastrado com sucesso!"`)
                }
           }
            break;

        case '2':
            if (listItens.length == 0) {
                alert('Lista vazia!')
            } else {
                alert(listItens)
            }
            break;

        default:
            break;
    
    }

    console.log(menuOption)
}

alert("Programa cancelado!")



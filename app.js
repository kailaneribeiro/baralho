const prompt = require ("prompt-sync")()

const criarBaralho = require ('./baralhos/criarBaralho')
const listarBaralhos = require ('./baralhos/listarBaralho')
const atualizarBaralho = require ('./baralhos/atualizarBaralho')
const deletarBaralho = require ('./baralhos/deletarBaralho')

const criarFlashcard = require('./flashcard/criarFlashcards')
const listarFlashcards = require('./flashcard/criarFlashcards')
const atualizarFlashcard = require('./flashcard/atualizarFlashcards')
const deletarFlashcard = require('./flashcard/deletarFlashcardsPorBaralho')
const buscarFlashcardPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta')
const buscarFlashcardPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho')









function menu (){
    console.log(`
    1. Criar Baralho
    2. Listar Baralho
    3. Atualizar Baralho
    4. Deletar Baralho
    5. Criar Flashcard
    6. Listar Flashcards
    7. Listar Flashcards por Baralho
    8. Atualizar Flashcard
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    11. Buscar Flashcards por Baralho
    0. Sair
    `)


var escolha = prompt('Qual item deseja realizar: ')
    switch(escolha){
        case '1':
            var nome = prompt('QUAL É O NOME DO BARALHO?')
            criarBaralho({ nome});
            console.log('Baralho criado com sucesso!');
            menu();
            break
        case '2':
            listarBaralhos()
            menu()
            break
        case '3':
            listarBaralhos();
            var id = parseInt(prompt('qual elemento deseja atualizar: '))
            var novoBaralho = prompt('Novo nome: ');
            atualizarBaralho(id,{ nome: novoBaralho})
            console.log(' Baralho atualizado com sucesso!')
            menu()
            break
        case '4':
            listarBaralhos()
            id = parseInt(prompt('Número de Usuario que deseja remover: '))
            deletarBaralho(id);
            menu();
            break
        case '5':
            let pergunta = prompt("Qual a pergunta do flashcard: ")
            let resposta = prompt("Qual a resposta dessa pergunta: ")
            listarBaralhos()
            idBaralho = parseInt(prompt("Informe o ID do baralho para adicionar: "))
            criarFlashcard({ pergunta, resposta, idBaralho })
            console.log("Flashcard adicionado com sucesso!")
            exibirMenu()
            break  
            break
        case '6':
            listarFlashcards()
            menu()
            break
        case '7':
            listarBaralhos()
            idBaralho = parseInt(prompt("Escolha um baralho para listar os flashcards: "))
            listarFlashcardsPorBaralhoId(idBaralho)
            menu()
            break
        case '8':
            listarFlashcards()
            id = parseInt(prompt("Escolha um flashcard par atualizar: "))
            let novaPergunta = prompt("Qual é a nova pergunta: ")
            let novaResposta = prompt("Qual é a nova resposta: ")
            let novoBaralho = prompt("Qual o novo ID do baralho: ")
            atualizarFlashcard(id, { pergunta: novaPergunta, resposta: novaResposta, idBaralho: novoBaralho })
            console.log("Flashcard atualizado!")
            menu()
            break
        case '9':
            listarFlashcards()
            id = parseInt(prompt("Escolha um flashcard para deletar: "))
            deletarFlashcard(id)
            console.log("Flashcard deletad com sucesso!")
            menu()
            break
        case '10':
            let buscarPergunta = prompt("Informe a pergunta do flashcard: ")
            let resul = buscarFlashcardsPorPergunta(buscarPergunta)
            console.log(resul)
            menu()
            break
        case '11':
            listarBaralhos()
            idBaralho = parseInt(prompt("Escolha um baralho para buscar o flashcard: "))
            let flashcardsEncontrados = buscarFlashcardsPorBaralho(idBaralho)
            console.log(flashcardsEncontrados)
            menu()
            break
        case '12':
            console.log("Até mais 👋! :)")
            break
        default:
            console.log("Opção inválida!")
    }
}

menu()

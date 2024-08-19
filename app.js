const prompt = require ("prompt-sync")()

const criarBaralho = require ('./baralhos/criarBaralho')
const listarBaralhos = require ('./baralhos/listarBaralho')
const atualizarBaralho = require ('./baralhos/atualizarBaralho')
const deletarBaralho = require ('./baralhos/deletarBaralho')

const criarFlashcards = require('./flashcard/criarFlashcards')
const listarFlashcards = require('./flashcard/listarFlashcards')
const atualizarFlashcard = require('./flashcard/atualizarFlashcards')
const apagarFlashcards = require('./flashcard/apagarFlashcards')
const buscarFlashcardsdPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta')
const procurarFlashcardsPorBaralho = require('./flashcard/procurarFlashcardsPorBaralho')









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

            break
        case '7':

            break
        case '8':

            break
        case '9':

            break
        case '10':

            break
        case '11':

            break
        case '0':

        default:
        
    }
}
menu()

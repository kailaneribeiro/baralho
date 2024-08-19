const prompt = require ("prompt-sync")()

const criarBaralho = require ('./baralhos/criarBaralho')
const listarBaralhos = require ('./baralhos/listarBaralho')
const atualizarBaralho = require ('./baralhos/atualizarBaralho')
const deletarBaralho = require ('./baralhos/deletarBaralho')

const criarFlashcard = require('./flashcard/criarFlashcard')
const listarFlashcards = require('./flashcard/listarFlashcards')
const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId')
const atualizarFlashcard = require('./flashcard/atualizarFlashcard')
const deletarFlashcard = require('./flashcard/deletarFlashcard')
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta')
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho')









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

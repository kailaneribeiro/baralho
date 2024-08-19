const { flashcards } = require('../data.js')

function listarFlashcardsPorBaralho(idBaralho){
    flashcards.filter(flashcard => flashcard.idBaralho === idBaralho).forEach(flashcard => {
        console.log(`
        id: ${flashcard.id}
        pergunta: ${flashcard.pergunta}
        resposta: ${flashcard.resposta}`)
        
    });

module.exports = listarFlashcardsPorBaralho









}
module.exports = listarFlashcardsPorBaralho
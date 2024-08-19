const { flashcards } = require('../data.js')

function listarFlashcards() {
    if(flashcards !== 0){
        flashcards.forEach(flashcard => {
            console.log(`
            ID: ${flashcard.id}
            Pergunta: ${flashcard.pergunta}
            Resposta: ${flashcard.resposta}
            ID do -Baralho: ${flashcard.idBaralho}
            `);
        })
    }
}

module.exports = listarFlashcards 

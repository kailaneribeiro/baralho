const { flashcards } = require('../data.js')

function listarFlashcards() {
    if(flashcards !== 0){
        flashcards.forEach(flashcard => {
            console.log(`
            id: ${flashcard.id}
            pergunta: ${flashcard.pergunta}
            resposta: ${flashcard.resposta}
            ID do -Baralho: ${flashcard.idBaralho}
            `);
        })
    }
}

module.exports = listarFlashcards 

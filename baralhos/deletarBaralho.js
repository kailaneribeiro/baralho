const {baralhos, flashcards} = require ('../data.js')

function deletarBaralho(id){
    let remove = baralhos.findIndex(baralho => baralho.id === id)
    if(remove !== -1){
        baralhos.splice(remove,1)
            for(let i = flashcards.length -1; i >= 0; i--)
                if(flashcards[i].idBaralho === id)
                    {flashcards.splice(i,1)}
        console.log ('Item removido com sucesso!')}
}

module.exports = deletarBaralho
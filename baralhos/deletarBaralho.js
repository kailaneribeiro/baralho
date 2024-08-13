const {baralhos} = require ('../data.js')

function deletarBaralho(id){
    let remove = baralhos.findIndex(baralho => baralho.id === id)
    if(remove !== -1){
        baralhos.splice(remove,1)
        console.log ('Item removido com sucesso!')}
}

module.exports = deletarBaralho
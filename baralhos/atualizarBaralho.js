const {baralhos} = require ('../data.js')


function atualizarBaralhos(id, novo){
    let atualiza = baralhos.findIndex(baralho => baralho.id === id)
    baralhos[atualiza] = { id: id, ...novo}
}

module.exports = atualizarBaralhos
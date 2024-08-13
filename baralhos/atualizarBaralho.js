const {baralhos} = require ('../data.js')


function atualizarBaralhos(id, novoBaralho){
    let atualiza = baralhos.findIndex(baralho => baralho.id === id)
    baralhos[atualiza] = { id: id, ...novoBaralho}
}

module.exports = atualizarBaralhos
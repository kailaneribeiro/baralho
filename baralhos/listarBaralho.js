const {baralhos} = require ('../data.js')

function listarBaralhos(){
    for (let i = 0; i < baralhos.length; i++) {
        const baralho = baralhos[i];
        console.log(`
      id: ${baralho.id},
      nome: ${baralho.nome},
      `);
        }
        }
        
      
      module.exports = listarBaralhos



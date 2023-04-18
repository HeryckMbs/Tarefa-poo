var resultados = '';
var dicas = '';
var tentativas = 10;
console.log('oi')
tentativasTitle = document.getElementById('qtd_tentativas');
tentativasTitle.innerHTML = `<h1 class="text-center">Você tem ${tentativas} tentativas</h1>`
function verificar() {
    let tentativasDiv = document.getElementById('tentativas');
    if (tentativas > 0) {
        let brasilChute = parseInt(document.getElementById('brasil').value != '' ? document.getElementById('brasil').value : 0 );
        let alemanhaChute = parseInt(document.getElementById('alemanha').value != '' ? document.getElementById('alemanha').value : 0);

        let brasil = Math.floor(10 * Math.random() );
        let alemanha = Math.floor(10 * Math.random() );
        console.log(brasil, alemanha)
        if (brasil == brasilChute && alemanha == alemanhaChute) {
            var elemento = document.getElementById('resultado');
            elemento.innerHTML = '<span class="badge text-bg-success">Parabéns, você acertou</span>'
            tentativas = 0;
            document.getElementById('verifica').setAttribute('disabled', true)

        } else {
            if(brasil > alemanha){
                dicas += `Brasil fez mais gols. <br>`
            }else{
                dicas += `Alemanha fez mais gols. <br>`
            }

            var elementoResultado = document.getElementById('resultado');
            var elementoDicas = document.getElementById('dicas');
            elementoDicas.innerHTML = `<span class="badge text-bg-info">Tentativas:<br> ${dicas} </span>`
            elementoResultado.innerHTML = '<span class="badge text-bg-danger">Parabéns, você errou!</span>'
        }
        resultados += `Brasil : ${brasilChute} Alemanha: ${alemanhaChute} <br>`                
        tentativasDiv.innerHTML = `<span class="badge text-bg-info">Tentativas:<br> ${resultados} </span>`
        --tentativas;
        tentativasTitle.innerHTML = `<h1 class="text-center">Você tem ${tentativas} tentativas</h1>`;
    }else{
        resultados += 'Tentativas esgotadas'
        tentativasDiv.innerHTML = `<span class="badge text-bg-info">Tentativas:<br> ${resultados} </span>`
        document.getElementById('verifica').setAttribute('disabled', true)
    }
}

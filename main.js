const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const valorA = document.getElementById('numberA');
    const valorB = document.getElementById('numberB');

    if(valorA.value < valorB.value){
        alert("Valores inseridos corretamente");
    }
    else{
        alert("ERRO - Valores incorretos");
    }

    valorA.value = '';
    valorB.value = '';


})


document.getElementById('form').addEventListener('submit', cargar);
// Cargar
function cargar(e){ // Agrega numeros al localStorage
    e.preventDefault();
    let number = document.getElementById('numero').value;
    const elemento = {
        number
    };
    // localList es el nombre del JSON
    if (localStorage.getItem('localList') === null) {
        let lista = [];
        lista.push(elemento);
        localStorage.setItem('localList', JSON.stringify(lista));
    } else {
        let lista = JSON.parse(localStorage.getItem('localList'));
        lista.push(elemento);
        localStorage.setItem('localList', JSON.stringify(lista));
    }

    mostrar();

    e.target.reset();
}
// Mostrar
function mostrar(){
    let lista = JSON.parse(localStorage.getItem('localList'));
    let espacio = document.getElementById('list');

    espacio.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let numero = lista[i].number;

        espacio.innerHTML += `<li>${numero}</li>`; 
    }
}
mostrar();

// Limpiar
document.getElementById('btnClear').addEventListener('click', limpiar);
function limpiar(){
    localStorage.removeItem('localList');
    let espacio = document.getElementById('list');
    espacio.innerHTML = '';
}

// Operaciones
var select = document.getElementById('selectMath');
select.addEventListener('change', operar);
function operar(e){
    e.preventDefault();
    let operacion = this.options[select.selectedIndex];
    let camino = parseInt(operacion.value);
    // Cargar array
    let lista = JSON.parse(localStorage.getItem('localList'));
    let numeros = [];
    for (let i = 0; i < lista.length; i++) {
        numeros.push(parseInt(lista[i].number));
    }
    // Caminos
    // Numeros ejemplo { 2 3 4 -1 -7 8 -13 6 2 }
    switch (camino) {
        case 1:
            // console.log('Opción 1');
            // console.log(numeros);
            for (let i = 0; i < numeros.length; i++) {
                for (let j = 0; j < numeros.length; j++) {
                    if (numeros[j] > numeros[j + 1]) {
                        [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
                    }
                }
            }
            // console.log(numeros);
            let restContainer = document.getElementById('resultContainer');
            restContainer.classList.add('hide');
            let espacio = document.getElementById('list');
            espacio.innerHTML = '';
            for (let k = 0; k < numeros.length; k++) {
                let num = numeros[k];

                espacio.innerHTML += `<li>${num}</li>`;
            }
            break;

        case 2:
            // console.log('Opción 2');
            // console.log(numeros);
            for (let i = 0; i < numeros.length; i++) {
                for (let j = 0; j < numeros.length; j++) {
                    if (numeros[j] < numeros[j + 1]) {
                        [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
                    }
                }
            }
            // console.log(numeros);
            let restContainer1 = document.getElementById('resultContainer');
            restContainer1.classList.add('hide');
            let espacio1 = document.getElementById('list');
            espacio1.innerHTML = '';
            for (let k = 0; k < numeros.length; k++) {
                let num = numeros[k];

                espacio1.innerHTML += `<li>${num}</li>`;
            }
            break;
        
        case 3:
            // console.log('Opción 3');
            // console.log(numeros);
            let suma = 0;
            for (let i = 0; i < numeros.length; i++) {
                suma += numeros[i];
            }
            let espacio2 = document.getElementById('resultContainer');
            espacio2.classList.remove('hide');
            let resultado = document.getElementById('result');
            if (suma) {
                resultado.value = suma; 
            }
            // console.log(suma);
            break;

        case 4:
            // console.log('Opción 4');
            // console.log(numeros);
            let multiplo = [];
            for (let i = 0; i < numeros.length; i++) {
                for (let j = 0; j < numeros.length; j++) {
                    multiplo[j] = (numeros[j] * numeros[j]);
                }
            }
            // console.log(multiplo);
            let restContainer3 = document.getElementById('resultContainer');
            restContainer3.classList.add('hide');
            let espacio3 = document.getElementById('list');
            espacio3.innerHTML = '';
            for (let k = 0; k < multiplo.length; k++) {
                let mult = multiplo[k];

                espacio3.innerHTML += `<li>${mult}</li>`;
            }
            break;
    }
}
window.onload = () => {
    const btn = document.getElementById('btn');
    const btnBorrar = document.getElementById('btnBorrar');
    const inputElemento = document.getElementById('inputElemento');
    const lista = document.getElementById('lista');
    btn.addEventListener('click', () => {
        const texto = inputElemento.value;
        if (texto === '') {
            alert('Ingrese un texto');
            return;
        }
        agregarElemento(texto, lista);
        inputElemento.value = '';
    });
    btnBorrar.addEventListener('click', () => {
        borrarElemento(lista);
    });
}

/**
 * Función que agrega un elemento a una lista en el DOM
 * @param {*} texto - texto a agregar
 * @param {*} lista - lista a la que se le agregará el elemento
 */
function agregarElemento(texto, lista) {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
}

/**
 * Función que borra el último elemento de una lista en el DOM
 * @param {*} lista - lista a la que se le borrará el último elemento
 */
function borrarElemento(lista) {
    const ultimoElemento = lista.lastElementChild;
    if (ultimoElemento){
        lista.removeChild(ultimoElemento);
    }
}
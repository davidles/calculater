const pantalla = document.getElementById('pantalla');

function addNumber(val){

    if (pantalla.value.includes('=')) {
        pantalla.value = val;
    }else {
        pantalla.value += val;
    }
}

function addSymbol(val){
    
    if (pantalla.value.includes('=')) {
        const result = sessionStorage.getItem('resultado')
        pantalla.value = `${result}${val}`
    }else{
        pantalla.value += val;

    }
    

}

function calculate(){
    const valPantalla = pantalla.value

    const resultado = eval(valPantalla);

    pantalla.value = `${valPantalla} = ${resultado}`

    sessionStorage.setItem('resultado', resultado)
}

function reset(){
    document.getElementById('pantalla').value = ''
}
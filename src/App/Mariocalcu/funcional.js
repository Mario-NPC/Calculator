var operandoa;
var operandob;
var operacion;
function init(){
    let resultado=document.getElementById(resultado)
    let siete=document.getElementById(siete)
    let ocho=document.getElementById(ocho)
    let nueve=document.getElementById(nueve)
    let cuatro=document.getElementById(cuatro)
    let cinco=document.getElementById(cinco)
    let seis=document.getElementById(seis)
    let uno=document.getElementById(uno)
    let dos=document.getElementById(dos)
    let tres=document.getElementById(tres)
    let cero=document.getElementBiId(cero)
    let suma=document.getElementById(suma)
    let resta=document.getElementById(resta)
    let divicion=document.getElementById(divicion)
    let multiplicacion=document.getElementById(multiplicacion)
    let reset=document.getElementById(reset)
    let igual=document.getElementById(igual)

    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1"
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2"
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3"
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4"
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5"
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6"
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+7
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textcontent+"8"
    }
    nueve.onclick=function(e){
        resultado.textcontent=resultado.textcontent+"9"
    }
    cero.onclick=function(e){
        resultado.textcontent=resultado.textContent+"0"
    }
    reset.onclick=function(e){
        limpieza()
    }
    suma.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="+";
        limpiar()
    }
    suma.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="-";
        limpiar()
    }
    suma.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="*";
        limpiar()
    }
    suma.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="/";
        limpiar()
    }
    suma.onclick=function(e){
        operandob=resultado.textContent;
        operacion="=";
        resolver()
    }

function limpiar(){
    resultado.textContent="";
}    
function limpieza(){
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operacion="";
}
function resultado(){
    var res=0;
    switch(operacion){
        case "+":
            res=parseFloat(operandoa)+parseFloat(operandob)
            break;
        case "-":
            res=parseFloat(operandoa)-parseFloat(operandob)
            break;
        case "*":
            res=parseFloat(operandoa)*parseFloat(operandob)
            break;
        case "/":
            res=parsefloat(operandoa)/parsefloat(operandob)
            break;                       
    }
    
}

}
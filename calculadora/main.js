
var resultado = document.getElementById('resultado').innerHTML;

function botao(num){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= resultado + num;
}

function limpar(){
    document.getElementById('resultado').innerText = " ";
}

function back(){
    
     document.getElementById('resultado').innerText = resultado.substring(0, resultado.length -1);
}

function calcular(){
    
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
        }
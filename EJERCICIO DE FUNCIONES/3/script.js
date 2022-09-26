function división(primerNumero, segundoNumero) {
   alert(primerNumero / segundoNumero);

}

do {
    primerNumero = parseInt(prompt("Introduce un número"));
    segundoNumero = parseInt(prompt("Introduce un número")); 
    if(segundoNumero!=0){
        división(primerNumero, segundoNumero)
  
    }
   
} while (segundoNumero != 0);


alert("se acabó el juego");




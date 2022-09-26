
let numero= parseInt(prompt("diga un numero"))

document.body.innerHTML=
` <div id=main>   
<p id="num">${numero}</p>
<button id="btn">Click me</button>
</div>`

button=document.querySelector("#btn")

button.addEventListener("click", function(){
  addnumero(numero)
});


function addnumero (numero) {

  p = document.querySelector("#num");


  p.innerHTML = parseInt(p.innerHTML) + numero;
}

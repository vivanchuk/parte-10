document.body.innerHTML+=
` <div id=main>  
<button id="btn" >Click me</button>
<img />
</div>`

document.querySelector("img").src ="file:///C:/Users/Usuario/Documents/programaci%C3%B3n/PRECURSO/EJERCICIOS/Precurso-Presencial-JS-master/DESCOMPRIMIDO/Precurso-Presencial-JS-master/parte10/DOM_ejercicio_03/anverso.jpg"


button=document.querySelector("#btn")

button=document.querySelector("#btn")



button.addEventListener("click", function(){
  if (document.querySelector("img").src.indexOf("anverso")!==-1){
    document.querySelector("img").src="./reverso.png"
  }
  else {
    document.querySelector("img").src="./anverso.jpg"
  }
})



 
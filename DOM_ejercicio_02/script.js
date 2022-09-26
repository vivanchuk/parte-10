


let parrafo= "la variable esta en false"

document.body.innerHTML=
` <div id=main>   
<p id="par">${parrafo}</p>
<button id="btn" >Click me</button>
</div>`


button=document.querySelector("#btn")

button.addEventListener("click", function(){
replace(parrafo)
})

  function replace(parrafo){
    p = document.querySelector("#par");
    p.innerHTML = parrafo.replace("la variable esta en false","la variable esta en true")
  }
    
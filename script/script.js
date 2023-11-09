let numeriTabella = [];

for (let i = 1; i <= 76; i++) {
  numeriTabella.push(i);
}


const contenitoriTabella = function(){
    for(i = 0; i < numeriTabella.length;i++ ){
        const contenitoreNumero = document.createElement("div")
        const tabella = document.getElementById("tabellone")
        const contenitoreTab =  tabella.appendChild(contenitoreNumero)
        contenitoreTab.classList.add("select")
        for(c = 0; c < numeriTabella.length ; c++ ){
        const paragrafo = document.createElement("p");
        paragrafo.textContent = numeriTabella[c]; 
        contenitoreTab.appendChild(paragrafo);
        }
    }
}
contenitoriTabella()


let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let list = document.getElementById('mySelect');

//to the event we take the option selected
countries.forEach( (e) => {
    let aux = document.createElement('option')
    aux.innerHTML = e
    list.appendChild(aux)
})

function alerta(){
    let valor = list.value;
    alert(valor)
}

list.addEventListener('change', alerta)
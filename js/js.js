let inputs = document.querySelectorAll(".mostrar")
inputs.forEach(element => {
    element.onclick = (e) => {
        mostrar(e)
    }
    }
);

const mostrar = (elemento) => {
    let parrafos = document.querySelectorAll(".precio")
    parrafos.forEach(element => {
        element.getAttribute("name") == elemento.target.id ?
        element.style.display= "block" : 
        element.style.display= "none"
    })
}
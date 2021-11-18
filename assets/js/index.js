import { Aguila, Leon, Lobo, Oso, Serpiente } from "./animales.js";


const imgFormulario = document.getElementById("Animales") //ingreso de imagenes
const boton = document.querySelector("#btnRegistrar")
const templateModal = document.getElementById("templateModal")
// const fragment = document.createDocumentFragment()
const idmodal = document.getElementById("modal")


const url = 'http://127.0.0.7:5500/animales.json'


const traerData = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        extraerDatos(data.animales)
        
    }catch(error){
        console.log(error)
    }
}
traerData()



const extraerDatos = (datos) => {
    datos.forEach(item => {
        // console.log(item)
        boton.addEventListener("click", e => {
            e.preventDefault()
            const tipoAnimal = document.getElementById("animal").value;
            const edad = document.getElementById("edad").value;
            const comentarios = document.getElementById("comentarios").value;   

                if ( tipoAnimal == item.name && tipoAnimal == "Oso"){ //tipoAnimal == item.name
                    const ingresoOso = new Oso (tipoAnimal, edad, item.imagen , comentarios , item.sonido )
                    insertarImg("./assets/imgs/Oso.jpg")  //insertar desde animales json
                    pintarModal(edad, comentarios)
                    console.log(ingresoOso)
                    
                }
                if (tipoAnimal == item.name && tipoAnimal == "Aguila"){
                    const ingresoAguila = new Aguila (tipoAnimal, edad, item.imagen , comentarios , item.sonido ) 
                    insertarImg("./assets/imgs/Aguila.png")
                    pintarModal(edad, comentarios)
                    console.log(ingresoAguila)

                }
                if (tipoAnimal == item.name && tipoAnimal == "Lobo"){
                    const ingresoLobo = new Lobo (tipoAnimal, edad, item.imagen , comentarios , item.sonido ) 
                    insertarImg("./assets/imgs/Lobo.jpg")
                    pintarModal(edad, comentarios)
                    console.log(ingresoLobo)

                }
                if (tipoAnimal == item.name && tipoAnimal == "Serpiente"){
                    const ingresoSerpiente = new Serpiente (tipoAnimal, edad, item.imagen , comentarios , item.sonido ) 
                    insertarImg("./assets/imgs/Serpiente.jpg")
                    pintarModal(edad, comentarios)
                    console.log(ingresoSerpiente)

                }
                if(tipoAnimal == item.name && tipoAnimal == "Leon"){
                    const ingresoLeon = new Leon (tipoAnimal, edad, item.imagen , comentarios , item.sonido )
                    insertarImg("./assets/imgs/Leon.png")
                    pintarModal(edad, comentarios)
                    console.log(ingresoLeon)
                }
        } )



    });
}


const insertarImg = (imagenTabla) => {
    const imagen = document.createElement("img");
        imagen.src = imagenTabla  //insertar desde animales json
        imagen.setAttribute("width", "200px")
        // imagen.setAttribute("type", "button")
        imagen.setAttribute("data-toggle", "modal")
        imagen.setAttribute("data-target", "#exampleModal")
        imagen.setAttribute("class", "btn")
        imgFormulario.appendChild(imagen)
    
}

const pintarModal = ( edad, comentarios) => {
    const clone = templateModal.content.cloneNode(true);
    clone.querySelector("h5").textContent = edad
    clone.querySelector("h4").textContent = comentarios;
    // fragment.appendChild(clone);
    idmodal.appendChild(clone)
}


// _______________________________________-

// const extraerDatos = (datos) => {
//     datos.forEach(item => {
//         console.log(item)
//         boton.addEventListener("click", e => {
//             e.preventDefault()
//             const tipoAnimal = document.getElementById("animal").value;
//             const edad = document.getElementById("edad").value;
//             const comentarios = document.getElementById("comentarios").value;
//             const resultado = document.getElementById("resultado")    

//                 if ( tipoAnimal == "Oso"){ //tipoAnimal == item.name
//                     const ingresoOso = new Oso (tipoAnimal, edad, item.imagen , comentarios , item.sonido ) 
//                     console.log(ingresoOso)

//                     //   console.log(item.name + edad + comentarios )
//                     // resultado.innerHTML = item.name + edad + comentarios 
//                 }
//                 if (tipoAnimal == "Leon"){
//                     const ingresoOso = new Leon (tipoAnimal, edad, item.imagen , comentarios , item.sonido ) 
//                     console.log(ingresoOso)

//                 }
            
//         } )



//     });
// }

//insertando algo en el dom
// const parrafo = document.createElement("img");
// parrafo.textContent = "aqui va la imagen de algun animalito"

// imgFormulario.appendChild(parrafo)
// ______________________________________________________________-

// boton.addEventListener("click", e => {
//     e.preventDefault()
//     const tipoAnimal = document.getElementById("animal").value;
//     const edad = document.getElementById("edad").value;
//     const comentarios = document.getElementById("comentarios").value;
//         if ( tipoAnimal == "Oso"){
//           console.log(tipoAnimal + edad + comentarios)
//         }if(tipoAnimal == "Lobo"){
//             console.log("aqui hay un lobo")
//         }
    
// } )
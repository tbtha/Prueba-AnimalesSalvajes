class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        this.nombre = nombre
        this.edad = edad
        this.img = img
        this.comentarios = comentarios
        this.sonido = sonido
    }
    get getNombre (){
        return this.nombre
    }
    get getEdad (){
        return this.edad
    }
    get getImg(){
        return this.img
    }
    set setComm(nuevo){
        this.comentarios = nuevo
    }
    get getSonido(){
        return this.sonido 
    }
}


export class Leon extends Animal{
    constructor (nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    rugir(){

    }
}

export class Lobo extends Animal{
    constructor (nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    aullar(){
        
    }
}

export class Oso extends Animal{
    constructor (nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    gruñir(){
        
    }
}

export class Serpiente extends Animal{
    constructor (nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    sisear(){
        
    }
}

export class Aguila extends Animal{
    constructor (nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    chillar(){
        
    }
}
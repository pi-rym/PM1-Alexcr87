function borrarValor(elemento) {
    elemento.value = ''; // Borra el valor al hacer clic
}
class Activity{
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
class Repository {
    constructor(){
        this.activities = []
        this.id = 0
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl){
        const id = ++this.id     //! el primer + aumenta y el segundo + asigna si lo pongo asi = this.id++  primero asigna y despues aumenta
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity)
    }
    deleteActivity(id){
        this.activities =this.activities.filter((Activity) => Activity.id !==id)
    } 
}
const repositorio = new Repository()

function creaateHtmlActivity(activity){
    const{title, description, imgUrl} = activity
    const htmlTitle = document.createElement("p")
    htmlTitle.innerHTML = title
    htmlTitle.classList.add("prueba")

    const htmlDescription = document.createElement("div")
    htmlDescription.innerHTML = description
    htmlTitle.classList.add("prueba")
    
    const htmlImg= document.createElement("img")
    htmlImg.src = imgUrl
    htmlTitle.classList.add("prueba")
}
function copiar(){
    const inputActividad = document.getElementById("inputActividad");               // getElementById es para seleccionar un elemento del DOM
    const textareaDescripcion = document.getElementById("textareaDescripcion");
    const inputImagen = document.getElementById("inputImagen");
    title = inputActividad.value;
    description = textareaDescripcion.value;
    imgUrl = inputImagen.value;
    repositorio.createActivity(title, description, imgUrl)
    console.log(repositorio)

    const divContenedor = document.createElement("div");
    divContenedor.classList.add("nuevoDiv");

    const htmlTitle = document.createElement("p")
    htmlTitle.innerHTML = title
    htmlTitle.classList.add("nuevaActividad")
    divContenedor.appendChild(htmlTitle)

    
    const htmlImg= document.createElement("img")
    htmlImg.src = imgUrl
    htmlImg.classList.add("img-container")
    divContenedor.appendChild(htmlImg)
    
    const htmlDescription = document.createElement("p")
    htmlDescription.innerHTML = description
    htmlDescription.classList.add("nuevaActividad")
    divContenedor.appendChild(htmlDescription)

    const contenedor = document.getElementById("contenedor")
    contenedor.appendChild(divContenedor)
}


const agregar = document.getElementById("agregar");
agregar.addEventListener("click",copiar)











/* 
repository1 = new Repository()



repository1.createActivity("jugar wow", "perder el tiempo", "www")
console.log("1",repository1)
repository1.createActivity("correr", "asfasfa", "asdfasdasfda")

console.log("2",repository1) */
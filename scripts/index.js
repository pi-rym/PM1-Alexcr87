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

function handlerButton(){
    const inputActividad = document.getElementById("inputActividad");               // getElementById es para seleccionar un elemento del DOM
    const textareaDescripcion = document.getElementById("textareaDescripcion");
    const inputImagen = document.getElementById("inputImagen");
    
    const titleValue = inputActividad.value
    const descriptionValue = textareaDescripcion.value
    const imgValue = inputImagen.value

    if (!titleValue || !descriptionValue || !imgValue){
        alert ("Por favor llene todos los campos")
        return
    }
    repositorio.createActivity(titleValue, descriptionValue, imgValue)
    console.log(repositorio.activities)
    convertAllActivities()
}

function convertAllActivities(){
    const container = document.getElementById("contenedor")
    container.innerHTML = ""
    const activities = repositorio.getAllActivities()
    const htmlActivities = activities.map((activity) => createHTMLActivity(activity))
    console.log(htmlActivities)
    htmlActivities.forEach(activityHTML => {container.appendChild(activityHTML)})
}

function createHTMLActivity(activity){
    const {id, title, description, imgUrl} = activity

    const divContenedor = document.createElement("div");
    divContenedor.classList.add("nuevoDiv");
    divContenedor.id = id
    

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
    
    const htmlbutton = document.createElement("button")
    htmlbutton.dataset.id = id
    htmlbutton.innerHTML = "Borrar"
    divContenedor.appendChild(htmlbutton)
    htmlbutton.addEventListener("click", borrarActividad)
    
    return divContenedor
}

const agregar = document.getElementById("agregar");
agregar.addEventListener("click",handlerButton)

function borrarActividad(event) {
    const id = event.target.dataset.id
    repositorio.deleteActivity(parseInt(id));
    convertAllActivities();
}










/* 
repository1 = new Repository()



repository1.createActivity("jugar wow", "perder el tiempo", "www")
console.log("1",repository1)
repository1.createActivity("correr", "asfasfa", "asdfasdasfda")

console.log("2",repository1) */
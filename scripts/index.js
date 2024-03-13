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
function copiar(){
    title = inputActividad.value;
    description = textareaDescripcion.value;
    imgUrl = inputImagen.value;
    const repositorio = new Repository()
    repositorio.createActivity(title, description, imgUrl)
    inputActividad.value = "Nombre de la Actividad";
    textareaDescripcion.value = "Descripción";
    inputImagen.value = "Url de Imagen";
    console.log(repositorio)
}

const inputActividad = document.getElementById("inputActividad");               // getElementById es para seleccionar un elemento del DOM
const textareaDescripcion = document.getElementById("textareaDescripcion");
const inputImagen = document.getElementById("inputImagen");
const agregar = document.getElementById("agregar");
agregar.addEventListener("click",copiar)











/* 
repository1 = new Repository()



repository1.createActivity("jugar wow", "perder el tiempo", "www")
console.log("1",repository1)
repository1.createActivity("correr", "asfasfa", "asdfasdasfda")

console.log("2",repository1) */
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
    createActivity(id,title,description,imgUrl){
        id = this.id++
        const nuevaActividad = new Activity(id,title,description,imgUrl);
        this.activities.push(nuevaActividad)
    }
    deleteActivity(id){
        this.activities =this.activities.filter((Activity) => Activity.id !==id)
    } 
}
const repository = new Repository();
repository.createActivity(this.id,"musica", "buena", "www")
repository.createActivity(this.id,"asdasd", "bu12312312ena", "wwasfgsdgw")
console.log(repository.getAllActivities())
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
    /* deleteActivity(id){
        this.activities =this.activities.filter((Activity) => Activity.id !==id)
    } */
}
/* function borrarValor(input) {
    input.value = ''; // Borra el valor al hacer clic
} */
const repository = new Repository();
repository.createActivity("musica", "buena", "www")
repository.createActivity("asdasd", "bu12312312ena", "wwasfgsdgw")
console.log(repository);
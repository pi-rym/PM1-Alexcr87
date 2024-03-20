class Activity{
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
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
        const activity = new Activity(id, title, description, imgUrl)
        this.activities.push(activity)
    }
    deleteActivity(id){
        this.activities =this.activities.filter((Activity) => Activity.id !==id)
    } 
}
module.exports = {Activity, Repository}
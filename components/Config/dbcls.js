import { db } from "./config"


//all database functionality
class DB{
    constructor(collection){
        this.collection = collection
    }
    reformat(doc){
        return {id:doc.id, ...doc.data()}
    }
    
    findAll = async () => {
        const data = await db.collection(this.collection).get()
        return data.docs.map(this.reformat)
    }

    findByField = async (field, value) => {
        const data = await db.collection(this.collection).where(field, '==', value).get()
        return data.docs.map(this.reformat)
    }
    listenAll = set =>
    db.collection(this.collection).onSnapshot(snap => set(snap.docs.map(this.reformat)))

    findOne = async id => {
    const doc = await db.collection(this.collection).doc(id).get()
    return doc.exists ? this.reformat(doc) : undefined
    }


    listenOne = (set, id) =>
    db.collection(this.collection).doc(id).onSnapshot(snap => set(this.reformat(snap)))

    // item has no id
    create = ({ id, ...rest }) =>
    db.collection(this.collection).add(rest)

    // item has id
    update = ({ id, ...rest }) =>
    db.collection(this.collection).doc(id).set(rest)

    remove = id =>
    db.collection(this.collection).doc(id).delete()

    }

    class ElderUsers extends DB {

        constructor() {
            super('elderlyUsers')
        }
        
        findByRole = role =>
            this.findByField('role', role)
    
        updateProfile = (userId, { ...rest }) =>
            db.collection(this.collection).doc(userId).set(rest)
        
        listenToCustomerCount = (set, user) =>
        db.collection(this.collection).where("role", "==", user).onSnapshot(snap => set(snap.docs.map(this.reformat)))
    }

    class VolunteerUsers extends DB {

        constructor() {
            super('volunteerUsers')
            // this.Wishlist = new Wishlist(this.collection)
            // this.Carts = new Carts(this.collection)
        }
        
        findByRole = role =>
            this.findByField('role', role)
    
        updateProfile = (userId, { ...rest }) =>
            db.collection(this.collection).doc(userId).set(rest)
        
        listenToCustomerCount = (set, user) =>
        db.collection(this.collection).where("role", "==", user).onSnapshot(snap => set(snap.docs.map(this.reformat)))
    }
export default {
    ElderUsers: new ElderUsers(),
    VolunteerUsers: new VolunteerUsers()
   
};
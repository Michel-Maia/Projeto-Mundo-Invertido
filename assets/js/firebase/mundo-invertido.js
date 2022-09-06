import app from "./app.js"
import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js"

export async function subscribeToMundoInvertido(subscription) {

    const db = getFirestore(app)
    const mundoInvertidoCollection = collection(db, 'mundo-invertido')
    const docRef = await addDoc(mundoInvertidoCollection, subscription) 
    return docRef.id
}
import app from "./app.js"
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js"

export async function subscribeToMundoInvertido(subscription) {

    const db = getFirestore(app)
    const mundoInvertidoCollection = collection(db, 'mundo-invertido')
    const docRef = await addDoc(mundoInvertidoCollection, subscription)
    return docRef.id
}

export async function getMundoInvertidoSubscriptions() {
    const db = getFirestore(app)
    debugger
    const mundoInvertidoCollection = collection(db, 'mundo-invertido')
    const mundoInvertidoCollectionSnapshot = await getDocs(mundoInvertidoCollection);
    const subscriptions = mundoInvertidoCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}
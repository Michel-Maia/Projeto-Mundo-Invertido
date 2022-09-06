//import app from "./firebase/app.js"
import { subscribeToMundoInvertido } from "./firebase/mundo-invertido.js";

console.log(app)

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // salvar no banco de dados 
    subscribeToMundoInvertido(subscription)
})


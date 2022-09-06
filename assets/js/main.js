//import app from "./firebase/app.js"
import { getMundoInvertidoSubscriptions, subscribeToMundoInvertido } from "./firebase/mundo-invertido.js";

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // salvar no banco de dados 
    const subscriptionId = await subscribeToMundoInvertido(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = '' 
    txtCharacter.value = ''
})

async function loadData() {
    const subscriptions = await getMundoInvertidoSubscriptions()
    console.log(subscriptions)

}

loadData()
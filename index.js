const elForm = document.querySelector(".form")
const elFormInput = document.querySelector(".form__input")
const chat = document.querySelector(".chat")
const elFormbtn = document.querySelector(".form__btn")
const elFormbtn2 = document.querySelector(".form__btn2")

elFormbtn.addEventListener("click", e => {
    e.preventDefault()

    chat.innerHTML = chat.innerHTML + `<h3> <b> ${elFormInput.value}</b></h3> <br>`

    elFormInput.value = null
})

elFormbtn2.addEventListener("click", e => {
    e.preventDefault()

    chat.innerHTML = chat.innerHTML + `<h3 align="right"> <b> ${elFormInput.value}</b></h3> <br>`

    elFormInput.value = null
})




// elForm.addEventListener("submit", (e)  =>  {
//     e.preventDefault()

// })
// // let formImg = document.createElement("img")
// // let elForm = document.querySelector(".form")
// // let elFormloginInput = document.querySelector(".form__login-input")
// // let elFormpaswordInput = document.querySelector(".form__password-input")
// // let elFormbtn = document.querySelector(".form__btn")

// // formImg.src = "https://picsum.photos/100/100"


// // elFormbtn.addEventListener("click", e => {
// //     e.preventDefault()


// //     if(elFormloginInput.value == "admin" && elFormpaswordInput.value == "123"){
// //         elForm.appendChild(formImg)
// //     }
// // })




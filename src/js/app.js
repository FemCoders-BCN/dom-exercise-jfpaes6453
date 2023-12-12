const cartButton = document.getElementById("button")
const itemTag = document.querySelector(".tag")
const imgCard = document.querySelector(".product-image")

const redCar = () => {
    cartButton.style.backgroundColor = "red"
    itemTag.style.backgroundColor = "red"
    imgCard.style.backgroundImage = "url('../../public/img/redcar.jpg')"
}

const grayCar = () => {
    cartButton.style.backgroundColor = "gray"
    itemTag.style.backgroundColor = "gray"
    imgCard.style.backgroundImage = "url('../../public/img/graycar.jpg')"
}

const blackCar = () => {
    cartButton.style.backgroundColor = "black"
    itemTag.style.backgroundColor = "black"
    imgCard.style.backgroundImage = "url('../../public/img/blackcar.jpg')"
}

//const buttonAlert = () => 
function buttonAlert(){
    const txt = document.getElementById("white-button").textContent
    alert(txt)
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".red").addEventListener('click', redCar);
    document.querySelector(".gray").addEventListener('click', grayCar);
    document.querySelector(".black").addEventListener('click', blackCar);
    document.getElementById("button").addEventListener('click', buttonAlert);
});

export {buttonAlert}
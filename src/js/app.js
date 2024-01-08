const cartButton = document.getElementById("button");
const itemTag = document.querySelector(".tag");
const imgCard = document.querySelector(".product-image");

function changeCar(color, imageUrl) {
    cartButton.style.backgroundColor = color;
    itemTag.style.backgroundColor = color;
    imgCard.style.backgroundImage = `url('../../public/img/${imageUrl}.jpg')`;
}

function buttonAlert() {
    const txt = document.getElementById("white-button").textContent;
    alert(txt);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".red").addEventListener('click', () => changeCar("red", "redcar"));
    document.querySelector(".gray").addEventListener('click', () => changeCar("gray", "graycar"));
    document.querySelector(".black").addEventListener('click', () => changeCar("black", "blackcar"));
    document.getElementById("button").addEventListener('click', buttonAlert);
});

export { buttonAlert };

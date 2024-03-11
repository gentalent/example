function initial() {
    let ele1 = document.querySelector("#form__signup");
    ele1.style.display = "none";

    let ele2 = document.querySelector("#signup__button");
    ele2.style.backgroundColor = "white";
    ele2.style.color = "black";
}
initial();


function login() {
    let element1 = document.querySelector("#form__login");
    let element2 = document.querySelector("#form__signup");
    element1.style.display = "block";
    element2.style.display = "none";

    let ele1 = document.querySelector("#login__button");
    let ele2 = document.querySelector("#signup__button");
    ele1.style.backgroundColor = "rgb(0,157,255)";
    ele1.style.color = "white";
    ele2.style.backgroundColor = "white";
    ele2.style.color = "black";
}

function signup() {
    let element1 = document.querySelector("#form__login");
    let element2 = document.querySelector("#form__signup");
    element1.style.display = "none";
    element2.style.display = "block";

    let ele1 = document.querySelector("#login__button");
    let ele2 = document.querySelector("#signup__button");
    ele1.style.backgroundColor = "white";
    ele1.style.color = "black";
    ele2.style.backgroundColor = "rgb(0,157,255)";
    ele2.style.color = "white";
}

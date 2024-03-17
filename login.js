function initial() {
    let ele1 = document.querySelector("#form__signup");
    ele1.style.display = "none";

    let ele2 = document.querySelector("#signup");
    ele2.style.backgroundColor = "white";
    ele2.style.color = "black";
}
initial();


function login() {
    let element1 = document.querySelector("#form__login");
    let element2 = document.querySelector("#form__signup");
    element1.style.display = "block";
    element2.style.display = "none";

    let ele1 = document.querySelector("#login");
    let ele2 = document.querySelector("#signup");
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

    let ele1 = document.querySelector("#login");
    let ele2 = document.querySelector("#signup");
    ele1.style.backgroundColor = "white";
    ele1.style.color = "black";
    ele2.style.backgroundColor = "rgb(0,157,255)";
    ele2.style.color = "white";
}

function err() {
    document.querySelector('.login__button').addEventListener('click', () => {
        setTimeout(() => {
            alert('Invalid Username or Password');
        }, 500);
    })
    document.querySelector('.signup__button').addEventListener('click', () => {
        setTimeout(() => {
            alert('Password must be atleast 8 characters');
        }, 500);
    })
}

err();
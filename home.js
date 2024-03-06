function previousImage() {
    let element = document.getElementsByClassName("display_img");
    let idold = element.id;
    let idnew = "img" + ((Number(idold.slice(3)) + 3) % 4);
    document.getElementById(idnew).classList = "display_img";
    document.getElementById(idold).classList.toggle("animate_center_to_right");
    document.getElementById(idnew).classList.toggle("animate_left_to_center");
    setTimeout(()=> {
        document.getElementById(idold).classList = "hide_img" ;
        document.getElementById(idnew).classList = "dispaly_img";
    },1000)
}

function nextImage() {
    let element = document.getElementsByClassName("display_img");
    element.classList.toggle("animate_center_to_left");
    let idold = element.id;
    let idnew = "img" + ((Number(idold.slice(3)) + 1) % 4);
    document.getElementById(idnew).classList = "display_img";
    document.getElementById(idnew).classList.toggle("animate_right_to_center");
    setTimeout(()=> {
        document.getElementById(idold).classList = "hide_img";
        document.getElementById(idnew).classList = "display_img";
    })
}
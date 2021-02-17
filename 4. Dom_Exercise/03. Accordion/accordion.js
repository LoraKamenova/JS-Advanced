// function toggle() {
//     let button = document.getElementsByClassName("button")[0];
//     let extra = document.getElementById("extra");
//
//     if (button.textContent === "More") {
//         extra.style.display = "block";
//         button.textContent = "Less";
//
//     } else if (button.textContent === "Less") {
//         extra.style.display = "none";
//         button.textContent = "More";
//     }
// }

function toggle() {
    let div = document.querySelector("#extra");
    let btn = document.querySelectorAll(".button")[0];

    if (div.style.display === "block") {
        btn.textContent = "More";
        div.style.display = "none"

    } else {
        btn.textContent = "More";
        div.style.display = "block";
    }
}
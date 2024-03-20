import { jegyek } from "./adat.js";

export function feladat1(jegyek) {
    let txt = "<ul>";
    for (let index = 0; index < jegyek.length; index++) {
        txt += `<li> Banda: ${jegyek[index].banda}, Ár: ${jegyek[index].ar}, Helyszín: ${jegyek[index].helyszin} </li>`
    }
    txt += "</ul>";

    
    return txt
}

function esemenyKezeles1() {
    const buttonEl = document.querySelectorAll(".lista")[0];
    buttonEl.addEventListener("click", ravisz);

}
function ravisz() {
    const buttonEl = document.querySelectorAll(".tartalom")[0];
    document.getElementsByClassName("tartalom")[0].innerHTML = 
    buttonEl.innerHTML;
}
import { jegyek } from "./adat.js";
import { feladat1 } from "./fuggvenyek.js";

let txt = feladat1(jegyek)
const ELEM = document.getElementsByClassName("tartalom")[0]
ELEM.innerHTML = txt

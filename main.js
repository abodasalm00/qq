let num = document.getElementById("num");
let pos = document.getElementById("pos");
let nig = document.getElementById("nig");


number = 0;

pos.onclick = () => {
    number++
    num.innerHTML = number;
}
nig.onclick = () => {
    number--
    num.innerHTML = number;
}
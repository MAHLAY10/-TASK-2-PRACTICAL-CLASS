let output = document.getElementById("output");

let x=5, y=6, z=0.24;
function itemP() {
    // calculte 2 * x + 4 * y (z * y) /4 * y * x
    // will retur p and the output : boolean 
    let p = "";
    t =  (4 * y * x)
    d =  (z + y)
    p = ( 2 * x  + 4 * y * d ) / t;

    // returnin p as output
        return p
}

output.innerHTML = itemP()
// console.log(itemP());
// document.write(itemP());

function itemF() {
    // calculate 3 * x * x + 45 * y (4 * x + 3 * z)
    // will return f and the output : boolean
    let f = "";
    o = (x * x);
    q = (4 * x + 3 * z);
    f = 3 * o + 45 * y * q

    // returnin f as output
    return f

}
// console.log(itemF());
// document.write(itemF());

let a = 2
h = a++
console.log(h);
let v=2;
h=v>>5


let i = 3; y = 4;

console.log(i**=y)





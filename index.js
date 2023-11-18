

// let add = document.getElementById("add")
// let count = 0

// function addy() {
//     count = count + 1
//     addy.textContent = count
// }
// addy()

let count = 12
let guest = 5

let countEl = document.getElementById("count-el")
let addonDe = document.getElementById("addon-el")



add.addEventListener("click", function() {
    count += 1 
    countEl.textContent = count
} )
add1.addEventListener("click", function() {
    count += 2
    countEl.textContent = count
} )
add2.addEventListener("click", function() {
    count += 3
    countEl.textContent = count
} )

add3.addEventListener("click", function() {
    guest += 8
    addonDe.textContent = guest
} )
add4.addEventListener("click", function() {
    guest += 4
    addonDe.textContent = guest
} )
add5.addEventListener("click", function() {
    guest += 6
    addonDe.textContent = guest
} )
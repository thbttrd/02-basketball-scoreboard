let addOneHomeBtn = document.getElementById("home-add-1")
let addTwoHomeBtn = document.getElementById("home-add-2")
let addThreeHomeBtn = document.getElementById("home-add-3")
let homeScreenContent = document.getElementById("home-screen-content")

let addOneGuestBtn = document.getElementById("guest-add-1")
let addTwoGuestBtn = document.getElementById("guest-add-2")
let addThreeGuestBtn = document.getElementById("guest-add-3")
let guestScreenContent = document.getElementById("guest-screen-content")

addOneHomeBtn.addEventListener("click", function() {
    let homeScreenValue = Number(homeScreenContent.textContent) + 1
    homeScreenContent.textContent = homeScreenValue
})

addTwoHomeBtn.addEventListener("click", function() {
    let homeScreenValue = Number(homeScreenContent.textContent) + 2
    homeScreenContent.textContent = homeScreenValue
})

addThreeHomeBtn.addEventListener("click", function() {
    let homeScreenValue = Number(homeScreenContent.textContent) + 3
    homeScreenContent.textContent = homeScreenValue
})

addOneGuestBtn.addEventListener("click", function() {
    let guestScreenValue = Number(guestScreenContent.textContent) + 1
    guestScreenContent.textContent = guestScreenValue
})

addTwoGuestBtn.addEventListener("click", function() {
    let guestScreenValue = Number(guestScreenContent.textContent) + 2
    guestScreenContent.textContent = guestScreenValue
})

addThreeGuestBtn.addEventListener("click", function() {
    let guestScreenValue = Number(guestScreenContent.textContent) + 3
    guestScreenContent.textContent = guestScreenValue
})
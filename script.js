// Hero button
const menuButton = document.querySelector(".hero-btn");

menuButton.addEventListener("click", function () {
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});


// Order buttons
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".menu-card");

        const mealName = card.querySelector("h3").textContent;

        const price = card.querySelector("span").textContent;

            const orderButtons = document.querySelectorAll(".order-btn");

const orderModal = document.querySelector("#orderModal");

const selectedMeal = document.querySelector("#selectedMeal");

const selectedPrice = document.querySelector("#selectedPrice");

const closeModal = document.querySelector(".close-modal");


orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".menu-card");

        const mealName = card.querySelector("h3").textContent;

        const price = card.querySelector("span").textContent;

        selectedMeal.textContent = mealName;

        selectedPrice.textContent = price;

        orderModal.classList.add("active");

    });

});


closeModal.addEventListener("click", function () {

    orderModal.classList.remove("active");

});


orderModal.addEventListener("click", function (event) {

    if (event.target === orderModal) {

        orderModal.classList.remove("active");

    }

});
       

    });

});
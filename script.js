"use strict";

const ratingNumbers = document.querySelectorAll(".rating-number");
const submit = document.querySelector(`button`);
const ratingScreen = document.querySelector(`.rating-content`);
const afterRating = document.querySelector(`.thanks-page`);
const ratingValue = document.getElementById("selected-rating");

ratingNumbers.forEach((rating) => {
	rating.addEventListener("click", function () {
		ratingNumbers.forEach((r) => {
			r.classList.remove("active-rating-number");
		});
		this.classList.add("active-rating-number");
	});
});

submit.addEventListener("click", function () {
	// it should select a rating to be able to continue
	if (document.querySelector(".active-rating-number") !== null) {
		ratingScreen.classList.add(`hidden`);
		afterRating.classList.remove(`hidden`);

		ratingValue.textContent = document.querySelector(".active-rating-number").textContent;
	}
});

/* ------------------------------- inputs-list ------------------------------ */
const categoriesInput = document.querySelector(".input_1");
const numberInput = document.querySelector(".input_2");
const generateBtn = document.querySelector(".sub-btn");
/* ------------------------------ display-List ------------------------------ */
const quoteContainer = document.querySelector(".q-container");
/* ------------------------------- controllers ------------------------------ */
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

/* ---------------------------------- Apis ---------------------------------- */

generateBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let categoriesValue = categoriesInput.value;
	let numberValue = numberInput.value;

	const baseUrl = `https://api.quotable.io/quotes/?tags=${categoriesValue}&limit=${numberValue}`;

	fetch(baseUrl)
		.then((response) => response.json())
		.then((data) => {
			const dataList = data.results;

			let htmlElement = ``;

			dataList.forEach((element) => {
				const content = element.content;
				const author = element.author;
				const category = categoriesValue;

				htmlElement += `
        <div class="quotes active">
					<p class="quote_categories">${category}</p>
					<h2 class="quote_txt">${content}</h2>
					<p class="quote_author">-${author}</p>
				</div>`;

				quoteContainer.style.display = "block";
				quoteContainer.innerHTML = htmlElement;
			});
		})
		.catch((error) => {
			console.log("error: ", error);
		});
});

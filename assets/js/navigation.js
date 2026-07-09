document.addEventListener("DOMContentLoaded", () => {
	const categories = document.querySelectorAll(".sidebar-category");
	const searchInput = document.getElementById("sidebar-search");

	categories.forEach((category) => {
		const title = category.querySelector(".category-title");
		title.addEventListener("click", () => {
			if (searchInput.value.trim() === "") {
				category.classList.toggle("is-open");
			}
		});
	});

	searchInput.addEventListener("input", (e) => {
		const query = e.target.value.toLowerCase().trim();

		categories.forEach((category) => {
			const pages = category.querySelectorAll(".sidebar-page-item");
			let hasMatch = false;

			pages.forEach((page) => {
				const pageTitle = page.querySelector("a").textContent.toLowerCase();
				if (pageTitle.includes(query)) {
					page.style.display = "block";
					hasMatch = true;
				} else {
					page.style.display = "none";
				}
			});

			if (query.length > 0) {
				if (hasMatch) {
					category.style.display = "block";
					category.classList.add("is-open");
				} else {
					category.style.display = "none";
				}
			} else {
				category.style.display = "block";
				if (category.classList.contains("default-open")) {
					category.classList.add("is-open");
				} else {
					category.classList.remove("is-open");
				}
			}
		});
	});
});

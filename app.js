const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach((accordion) => {
	accordion.addEventListener("click", () => {
		accordion.classList.toggle("active");
	});
});

const toggleMenu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-bar");
const windowInnerWidth = document.documentElement.clientWidth;

toggleMenu.addEventListener("click", () => {
	nav.classList.toggle("nav-active");
	console.log("Nav Active");

	if ((windowInnerWidth = 1024)) {
		nav.classList.remove("nav-active");
	}
});

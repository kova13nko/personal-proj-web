
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

if (theme === "dark") {
	document.getElementById("theme-toggle");
} else if (theme === "light") {
	document.getElementById("theme-toggle");
} else if  (userPrefers === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	window.localStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle");
} else {
	document.documentElement.setAttribute('data-theme', 'light');
	window.localStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle");
}

function modeSwitcher() {
	let currentMode = document.documentElement.getAttribute('data-theme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		window.localStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle");
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle");
	}
}
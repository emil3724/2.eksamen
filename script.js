window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");
	document.querySelector("#menuknap").addEventListener("click", toggleMenu);
	document.querySelector("#collapsible").addEventListener("click", visPriser);
	if (window.innerWidth <= 679) {
		document.querySelector("#menu").classList.add("hidden");
	}

}

let side;
const url = "https://marielouiselarsen.eu/kea/2-semester/tema10_eksamen/wordpress/wp-json/wp/v2/tatovering?per_page=6";

document.addEventListener("DOMContentLoaded", start);

function start() {
	hentJson();
}

async function hentJson() {
	const response = await fetch(url);
	tatoveringer = await response.json();
	console.log(tatoveringer);
	vis();

}

function vis() {
	const skabelon = document.querySelector("template");
	const dest = document.querySelector("#portfolio");

	tatoveringer.forEach(tatovering => {
		const klon = skabelon.cloneNode(true).content;
		klon.querySelector(".tat_img").src = tatovering.billede.guid;
		dest.appendChild(klon);
	})
}




function toggleMenu() {
	console.log("toggleMenu");
	document.querySelector("#menu").classList.toggle("hidden");

	let erSkjult = document.querySelector("#menu").classList.contains("hidden");

	if (erSkjult == true) {
		document.querySelector("#menuknap").textContent = "☰";
		document.querySelector("#menuknap").style.color = "white";
	} else {
		document.querySelector("#menuknap").textContent = "✖";
		document.querySelector("#menuknap").style.color = "#7D7096";
	}
}

//window.onscroll = function () {
//	removeLogo()
//};
//
//function removeLogo() {
//
//
//	if () {
//		document.querySelector("#logo_nav").classList.remove("hidden");
//	}
//
//}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	removeLogo()
};

// Get the header
var logo = document.getElementById("velkommen_boks");

// Get the offset position of the navbar
var fjern = logo.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function removeLogo() {
	if (window.pageYOffset > fjern) {
		document.querySelector("#logo_nav").classList.remove("hidden");
	} else {
		document.querySelector("#logo_nav").classList.add("hidden");
	}
}





function visPriser() {
	document.querySelector("#content_collap").classList.remove("hidden");
	document.querySelector(".luk_knap").addEventListener("click", skjulPriser);

}

function skjulPriser() {
	document.querySelector("#content_collap").classList.add("hidden");
}


/* slideshow */

var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1
	}
	x[slideIndex - 1].style.display = "block";
	setTimeout(carousel, 3000); // Change image every 5 seconds
}

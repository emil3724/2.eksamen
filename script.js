window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");
	document.querySelector("#menuknap").addEventListener("click", toggleMenu);
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
	} else {
		document.querySelector("#menuknap").textContent = "✖";
	}
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
	setTimeout(carousel, 5000); // Change image every 5 seconds
}

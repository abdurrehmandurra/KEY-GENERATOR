const GenKey = document.getElementById("key-btn");
const key = document.getElementById("keyText");

GenKey.addEventListener("click", keyGenetator);

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function keyGenetator() {
	c1 = characters.charAt(Math.floor(Math.random() * characters.length));
	c2 = characters.charAt(Math.floor(Math.random() * characters.length));
	c3 = characters.charAt(Math.floor(Math.random() * characters.length));
	c4 = characters.charAt(Math.floor(Math.random() * characters.length));
	c5 = characters.charAt(Math.floor(Math.random() * characters.length));
	c6 = characters.charAt(Math.floor(Math.random() * characters.length));

	key.value = String(c1 + c2 + c3 + c4 + c5 + c6);
}

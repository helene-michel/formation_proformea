const texte = document.getElementById("texte");

texte.addEventListener("click", () => {
    if (texte.style.color === "aqua") {
        texte.style.color = "green";
    } else {
        texte.style.color = "aqua";
    }
});

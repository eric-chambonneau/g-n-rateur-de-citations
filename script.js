alert ("bienvenue sur la page")
// une variable pour récupérer l'ID nom
let text = document.getElementById ("nom")
text.innerText = "coucou le cocu"
let avatar = document.getElementById("avatar")
let citation = document.getElementById("citation")
// faire l'evenement d'un click button
let btn = document.getElementById("btn")
btn.addEventListener('click' , updatePage);
function updatePage() {
    text.innerHTML = "toto la riflette";
    citation.innerHTML = "Serment de maquerelle, on le pèse sans peine."
avatar.setAttribute('src', "/media/tete de mort.jpg");
}

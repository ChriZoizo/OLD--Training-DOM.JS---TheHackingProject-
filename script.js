//1ere Fonctionnalité : affiche clique en console
var footer = document.querySelector("footer");
footer.addEventListener("click", FooterClick);
var x = 1;
function FooterClick() {
    console.log("clique" + x);
    x++;
}

//2nd Fonctionnalité : activer le 'collapse' sur la navbar
var navbar = document.querySelector("button");
var navcollapse = document.getElementById("navbarHeader");

function removeCollapse() {
    navcollapse.classList.toggle("collapse");
    console.log("Hop ! ça change de couleur");
}
navbar.addEventListener("click", removeCollapse);

//3eme Fonctionnalité : changer la couleur des bouttons lors d'un clique (definitif)
var first_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
first_button.addEventListener("click", redColor);

function redColor() {
    first_button.style.color = "red";
}

//4eme Fonctionnalité : changer la couleur des bouttons a chaque clique (2 couleurs)
var second_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
second_button.addEventListener("click", greenColor);

function greenColor() {
    if (second_button.style.color === "") {
        console.log("t'as vu ça change de couleur la aussi ^^")
        second_button.style.color = "green";
    } else {
        second_button.style.color = "";
    }
};

//5eme Fonctionnalité : activer/desactiver le link CSS en double cliquant
var css = document.getElementsByTagName("link")[0];
var navbarall = document.getElementsByClassName("navbar")[0];
navbarall.addEventListener("dblclick", removeLink);
var body = document.getElementsByTagName("main")[0];
body.addEventListener("dblclick", addlink);
var hasattribute = css.hasAttribute("href");

function removeLink() {
    css.removeAttribute("href");
}

function addlink() {
    var hasattribute = css.hasAttribute("href");
    if (hasattribute === false) {
        css.setAttribute(
            "href",
            "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        );
    }
}

//6eme Fonctionnalité : reduire les images des cartes et enlever leurs textes au survol de la souris. (reversible)
let card = document.getElementsByClassName("card mb-4 box-shadow");

for (let count = 0; count < card.length; count++) {
    let text = card[count].getElementsByClassName("card-text")[0];
    let image = card[count].getElementsByClassName("card-img-top")[0];
    let buttonview = card[count].getElementsByClassName(
        "btn btn-sm btn-success"
    )[0];
    function reduce() {
        if (image.style.width === "20%") {
            image.style = "";
            text.classList.toggle("collapse");
        } else {
            text.classList.toggle("collapse");
            image.style.width = "20%";
        }
    }
    buttonview.addEventListener("mouseover", reduce);
}

//7eme Fonctionnalité : deplacer la derniere carte en premier lors d'un clique sur un boutton
var grey_button = document.getElementsByClassName("btn btn-secondary my-2")[0];
var cards = document.getElementsByClassName("row")[1];
grey_button.addEventListener("click", moveon);

function moveon() {
    cards.insertBefore(cards.children[5], cards.children[0]);
}

//8eme Fonctionnalité : deplacer la premiere carte en derniere position lors d'un clique sur un boutton
var blue_button = document.getElementsByClassName("btn btn-primary my-2")[0];
blue_button.addEventListener("click", moveback);

function moveback() {
    blue_button.removeAttribute("href");
    cards.insertBefore(cards.children[0], cards.children[6]);
    console.log(selection.anchorNode);
}

//9eme Fonctionnalité : la galere XD
var brand = document.getElementsByTagName("strong")[0];
var fullbody = document.body;

window.addEventListener("keypress", (keyword) => {
    var selection = document.getSelection();
    if (selection.anchorNode.className === "navbar-toggler-icon") {
        switch (keyword.key) {
            case "a":
                fullbody.className = "col-4";
                break;
            case "y":
                fullbody.className = "col-4 offset-md-4";
                break;
            case "p":
                fullbody.className = "col-4 offset-md-8";
                break;
            case "b":
                fullbody.className = "";
        }
    }
});

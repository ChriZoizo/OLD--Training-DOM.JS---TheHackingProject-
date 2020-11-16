var footer = document.querySelector('footer');
footer.addEventListener('click', FooterClick);
var x = 1
function FooterClick(){
 
console.log('clique'+x)
x++
};




var navbar = document.querySelector("button")
var navcollapse = document.getElementById("navbarHeader");

var removeCollapse = function() {
    navcollapse.classList.toggle("collapse")
    console.log(navcollapse.className)
}

navbar.addEventListener("click", removeCollapse)




var first_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]

var redColor = function() {
    first_button.style.color = "red";
}

first_button.addEventListener("click", redColor);



var second_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
var greenColor = function() {
    if (second_button.style.color === "green") {
        second_button.style.color = "";
    } else {
        second_button.style.color = "green"
    }
}

second_button.addEventListener("click", greenColor); 



 var css = document.getElementsByTagName('link')[0];

 var navbarall = document.getElementsByClassName('navbar')[0];
 navbarall.addEventListener('dblclick', removeLink);

 var body = document.getElementsByTagName('main')[0]
body.addEventListener('dblclick', addlink);

var hasattribute = css.hasAttribute('href');

function removeLink(){
    css.removeAttribute('href');
}

function addlink(){
    var hasattribute = css.hasAttribute('href');
    if (hasattribute === false){
        css.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    };
}


let card = document.getElementsByClassName("card mb-4 box-shadow")

for (let count = 0; count < card.length; count++) {
    let text = card[count].getElementsByClassName("card-text")[0];
    let image = card[count].getElementsByClassName("card-img-top")[0];
    let buttonview = card[count].getElementsByClassName("btn btn-sm btn-success")[0];

     function reduce() {
        if(image.style.width === "20%") {
            image.style = ""; 
            text.classList.toggle("collapse");
        } else {
            text.classList.toggle("collapse");
            image.style.width = "20%";
        }
    }

    buttonview.addEventListener("mouseover", reduce);
} 


var boutongris = document.getElementsByClassName('btn btn-secondary my-2')[0]
var cards = document.getElementsByClassName('row')[1]

boutongris.addEventListener('click', moveon)


function moveon(){
    cards.insertBefore(cards.children[5], cards.children[0])
}


var boutonbleu = document.getElementsByClassName('btn btn-primary my-2')[0]
boutonbleu.addEventListener('click', moveback)


function moveback(){
    boutonbleu.removeAttribute('href')
    cards.insertBefore(cards.children[0], cards.children[6])
    console.log(selection.anchorNode)
}





var brand = document.getElementsByTagName('strong')[0]



// brand.addEventListener("select", selected);




var fullbody = document.body
window.addEventListener('keypress', (keyword)=> {
    var selection = document.getSelection()
    if (selection.anchorNode.className === 'navbar-toggler-icon'){

switch (keyword.key) {

case "a":
    fullbody.className = 'col-4'
    break;
case "y":
    fullbody.className = 'col-4 offset-md-4'
    break;
case "p":
    fullbody.className = 'col-4 offset-md-8'
    break;
    case "b":
        fullbody.className = vide
}
}})
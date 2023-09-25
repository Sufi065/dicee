var randomnumber1=Math.floor(Math.random() *6)+1;

var randomdice1="dice"+randomnumber1+".png";

var randomImageSourcee="images/"+randomdice1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSourcee);

var randomnumber2=Math.floor(Math.random() *6)+1;

var randomdice2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdice2);

if(randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML="🏁Plyar 1 Win"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Plyar 2 Win🏁"

}
else {
    document.querySelector("h1").innerHTML="🏁Draw🏁"
}


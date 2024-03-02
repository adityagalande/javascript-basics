const body = document.querySelector('body'); //this select body tag
const colorSpan = document.querySelectorAll('.button'); //this select all span tag 

colorSpan.forEach((val) =>( //this do forEach loop on span nodeList
    val.addEventListener((e) => ( //Here event listener added on each span tag
        body.style.backgroundColor = e.target.id //this event listener get id atribute of each span and set bgv color on body tag via ID
    ))
))
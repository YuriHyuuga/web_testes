(function(){
    var a = 5;
})();
console.log(a);

document.addEventListener("mousedown", function(event) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
});


/*addEventListener("keydown", function(event) {
    if (event.key == 'v')
    document.body.style.background = "violet";
    });

addEventListener("keyup", function(event) {
    if (event.key == 'v')
    document.body.style.background = "";
});


DO ÚLTIMO EXERCÍCIO DE PROGRAMAÇÃO WEB
function check_number_dots(){
    if(document.body.childElementCount == 8){
        document.body.removeChild(document.body.firstChild)
    }
    console.log(document.body.childElementCount)
}
let cont = 0
document.addEventListener("mousemove", (e)=>{
    if(cont == 8){
        document.body.removeChild(document.body.firstChild)
        cont = cont - 1
    }
    let dot = document.createElement("div");

    dot.className = "dot";
    dot.style.left = `${e.pageX}px`
    dot.style.top = `${e.pageY}px`

    document.body.appendChild(dot)
    //check_number_dots()
    cont = cont + 1
});
*/
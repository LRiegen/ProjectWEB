/*jslint browser:true, devel: true, eqeq: true, plusplus: true, sloppy:true, vars:true, white:true*/

var clicks;

function like() {
    clicks += 1;
    document.getElementById("clicks").innerHTML= clicks + ' likes.';
}

like();

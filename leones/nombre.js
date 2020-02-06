function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var n = decodeURIComponent(getUrlVars()["nombre"]);
var m = decodeURIComponent(getUrlVars()["mesa"]);
if(n == 'undefined' || m == 'undefined') {
    document.body.innerHTML = "ERROR, lo siento no se puede mostrar la página";
} else {
    document.getElementById('nombre').innerHTML = n;
    document.getElementById('mesa').innerHTML = m;
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var n = decodeURIComponent(getUrlVars()["nombre"]);
if(n == 'undefined') {
    document.body.innerHTML = "ERROR, lo siento no se puede mostrar la página";
} else {
    document.getElementById('nombre').innerHTML = n;
}
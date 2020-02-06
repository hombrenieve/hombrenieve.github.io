function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const images = {};
images['Lady Bug'] = 'ladybug.jpg';

const moto = {};
moto['Lady Bug'] = "¡Tiki puntos fuera!";


function setName(name) {
    $('#nombre').text(name);
}

function setImage(table) {
    $('#mesa').attr('src', 'img/'+images[table]);
}

function setMoto(table) {
    $('#moto').text(moto[table]);
}



$(function() {
    const name = decodeURIComponent(getUrlVars()['nombre']);
    const table = decodeURIComponent(getUrlVars()['mesa']);
    setName(name);
    setImage(table);
    setMoto(table);
});

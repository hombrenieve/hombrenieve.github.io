function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const images = {};
images['Lady Bug'] = 'ladybug.jpg';
images['Vampirina'] = 'vampirina.jpg';
images['Los Pitufos'] = 'pitufos.jpg'
images['La Pantera Rosa'] = 'pantera.jpg'

const moto = {};
moto['Lady Bug'] = "¡Puntos fuera!";
moto['Vampirina'] = "¡Soy como tú!";
moto['Los Pitufos'] = "¡Pitufeando!";
moto['La Pantera Rosa'] = "¿Por qué los humanos no pueden ser tan inteligentes como los animales?";

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

function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function setName(name) {
    $('#nombre').text(name);
}

$(function() {
    const name = decodeURIComponent(getUrlVars()['nombre']);
    setName(name);
});

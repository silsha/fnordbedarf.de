$(document).ready(function () {
    $.getJSON("../products.json",
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<th>" + json[i].name + "</th>");
            if (json[i].available)
                tr.append("<td class='success'>✔ Verfügbar</td>");
            else   
                tr.append("<td class='danger'>✘ Nicht verfügbar</td>");
            tr.append("<td>" + (json[i].price * json[i].flaschen).toFixed(2) + " €</td>");
            $('#angebot').append(tr);
        }
    });

    $.getJSON("../products.json",
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            if(json[i].available){
                tr = $('<tr/>');
                tr.append("<th>" + json[i].name + "<br><small>(" + (json[i].price * json[i].flaschen).toFixed(2) + " € netto pro Kasten)</small>" + "</th>");
                tr.append("<td><input type='text' class='form-control' data-name='" + json[i].name + "' data-type='flasche'></td>");
                tr.append("<td><input type='text' class='form-control' data-name='" + json[i].name + "' data-type='kiste'></td>");
                $('#preis').append(tr);
            }
        }
    });

});
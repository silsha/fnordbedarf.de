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
            tr.append("<td>" + json[i].price + " €</td>");
            $('table').append(tr);
        }
    });
});
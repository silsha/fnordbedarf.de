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
            tr.append("<td>" + (json[i].price * 1).toFixed(2) + " €</td>");
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
                tr.append("<td><input type='text' class='form-control userfield' data-name='" + json[i].name + "' data-type='flasche' data-price='" + json[i].price + "'></td>");
                tr.append("<td><input type='text' class='form-control userfield' data-name='" + json[i].name + "' data-type='kiste'  data-price='" + json[i].price + "'></td>");
                $('#preis').append(tr);
            }
        }
        tr = $('<tr/>');
        tr.append("<th colspan='3'>Rückgaben?</th>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th>Flaschen</th><td colspan='2'><input type='text' class='form-control' data-type='flaschenback'></td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th>Kisten</th><td colspan='2'><input type='text' class='form-control' data-type='kistenback'></td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th>Leere Kisten</th><td colspan='2'><input type='text' class='form-control' data-type='kistenleerback'></td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='3'>Und die Extras …</th>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='2'>Gesamtpreis vor MwSt.</th><td id='gesnomwst' data-value='0.00'>0.0y0 €</td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='2'>MwSt. (19%)</th><td id='mwst' data-value='0.00'>0.00 €</td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='2'>Rechnungsbetrag</th><th id='gesmwst' data-value='0.00'>0.00 €</th>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='2'>Das Finanzamt erhält</th><td id='finanzamt' data-value='0.00'>0.00 €</td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='2'>Wir bekommen</th><td id='wir' data-value='0.00'>0.00 €</td>");
        $('#preis').append(tr);
        tr = $('<tr/>');
        tr.append("<th colspan='2'>Dein Anti-Mengenrabatt beträgt</th><td id='antimenge' data-value='0.00'>0.00 €</td>");
        $('#preis').append(tr);

        $('.userfield').on("change keydown keyup", function(){
            if($(this).data('type') == 'flasche'){
                console.log($(this).html());
                //var newGes = parseFloat(oldGes) + ($(this).data('price') * $(this).val());
                var newGes = 0;
                for (var i = $('.userfield').length - 1; i >= 0; i--) {
                    var price = $($('.userfield')[i]).data('price');
                    var vol = $($('.userfield')[i]).val();
                    console.log(vol);
                    newGes = newGes + (price * vol);
                };
                newGes = newGes.toFixed(2);
                mwst = (newGes*0.19).toFixed(2);
                ges = (parseFloat(newGes)+parseFloat(mwst)).toFixed(2);
                $('#gesnomwst').html(newGes + ' €').data('value', newGes);
                $('#mwst').html(mwst + ' €').data('value', mwst);
                $('#finanzamt').html(mwst + ' €').data('value', mwst);
                $('#gesmwst').html(ges + ' €').data('value', ges);
            }
        });
    });

});
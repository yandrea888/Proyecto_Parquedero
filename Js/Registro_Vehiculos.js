'use strict'

$(document).ready(function()
{
    var carro = $("#carro");
    var moto = $("#moto");
    var bicicleta = $("#bicicleta");
    var regresar = $("#regresar");

    function cambiaGreen()
    {
        $(this).css("background","rgba(143, 212, 137, 0.836)")
                .css("cursor","pointer");
    }
    function cambiaOriginal()
    {
        $(this).css("background","rgba(91, 161, 218, 0.562)");
    }

    carro.hover(cambiaGreen,cambiaOriginal);
    moto.hover(cambiaGreen,cambiaOriginal);
    bicicleta.hover(cambiaGreen,cambiaOriginal);
    regresar.hover(cambiaGreen,cambiaOriginal);
});
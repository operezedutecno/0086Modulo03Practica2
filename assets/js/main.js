// Clase que representa los estudiantes
function Estudiante(codigo, nombre, valorCredito, nroCreditos, valorRecargo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.valor_credito = Number(valorCredito);
    this.nro_creditos = Number(nroCreditos);
    this.valor_recargo = Number(valorRecargo);

    this.calcularMonto = function() {
        return (this.valor_credito * this.nro_creditos) + this.valor_recargo;
    }
}


$(document).ready(function() {
    var estudiantes = [];
    $("form").submit(function(evento) {
        evento.preventDefault();
        var codigo = $("#txt-codigo").val();
        var nombre = $("#txt-nombre").val();
        var valorCredito = $("#txt-valor-credito").val();
        var nroCreditos = $("#txt-nro-creditos").val();
        var valorRecargo = $("#txt-valor-recargo").val();

        var estudiante = new Estudiante(codigo, nombre, valorCredito, nroCreditos, valorCredito, valorRecargo);
        estudiantes.push(estudiante)
        limpiarFormulario()
        listarInscritos(estudiantes)
    })

    function limpiarFormulario() {
        $("#txt-codigo,#txt-nombre,#txt-valor-credito,#txt-nro-creditos,#txt-valor-recargo").val("");
    }

    function listarInscritos(estudiantes) {
        $("#tbl-inscritos tbody").html("");
        var suma = 0;
        var contador = 0;
        for (const estudiante of estudiantes) {
            var monto = estudiante.calcularMonto();
            suma = suma + monto;
            contador++;
            $("#tbl-inscritos tbody").append(`
                <tr>
                    <td>${estudiante.codigo}</td>
                    <td>${estudiante.nombre}</td>
                    <td class="text-end">${estudiante.valor_credito}$</td>
                    <td class="text-end">${estudiante.nro_creditos}</td>
                    <td class="text-end">${estudiante.valor_recargo}$</td>
                    <td class="text-end">${monto}$</td>
                </tr>    
            `);
        }
        $("#total").html(`${suma} $`);
        $("#promedio").html(`${(suma/contador).toFixed(2)} $`);
    }
})
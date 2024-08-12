// Clase que representa los estudiantes
function Estudiante(codigo, nombre, valorCredito, nroCreditos, valorRecargo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.valor_credito = valorCredito;
    this.nro_creditos = nroCreditos;
    this.valor_recargo = valorRecargo;

    this.calcularMonto = function() {
        var monto = 0;
        return monto;
    }
}
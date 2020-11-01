var nombre = 'Israel', apellido = ' Santizo';
console.log('Hola mi nombre es: '+nombre + apellido )
var nombreMayuscula = nombre.toUpperCase()
var apellidoMinuscula = apellido.toLowerCase()
var primeraLetraNombre = nombre.charAt(0)
var cantidadLetraNombre = nombre.length
var nombreCompleto = nombre + ' ' + apellido
/*Interpolacion*/
var nombreCompletoInterpolacion = `${nombre} ${apellido.toUpperCase()}`
/*Sub string*/
var str = nombre.substr(1, 2)
/*Ejercicio*/
var ultimaLetraNombreSub = nombre.substr(-1)
var ultimaLetraNombreChart = nombre.charAt(nombre.length-1)
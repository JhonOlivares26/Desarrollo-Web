// ejemplos de javascript

//comentario de linea
/**comentario de bloque */

console.log("Hola mundo")
console.log("--------")

const edad = "16"
let nombre = "Jhon"
let apellido = "olivares"
const esEstudiante = false
const altura = 1.70
const semestre = [12, 34, "a"] //lista o array
const materiaPreferida = {nombre:"calculo", id:0} //diccionario --> objeto --> JSON (javascript object notation)

//null - undefined
const universidad = null
const carrera = undefined

console.log("tipo de dato de nombre:" + typeof nombre)

console.log("-------------- conversion de string a number -----------------")
const precioMatricula = "50000000.9"
console.log(parseInt(precioMatricula))
console.log(parseFloat(precioMatricula))

console.log("-------------- == -----------------")
console.log("doble igual: " , "45" == 45); //true (valor)
console.log("triple igual: " , "45" === 45); //false (valor y tipo)

console.log("-------------- concatenacion -----------------")
console.log(nombre + " " + apellido)
console.log(`${nombre} h ${apellido}`)

console.log("-------------- operador terniario -----------------") 
console.log("exp ? verdadero : falso")
console.log(edad > 18 ? "Es mayor de edad": "Es menor de edad" );

let condition = edad > 18
if (condition) {}
if (condition) {} else {}

const dia = "LUNESJASD"
switch (dia) {
    case "LUNES":
        console.log("LUNES")
        break
    case "MARTES":
        console.log("MARTES")
        break
    default:
        console.log("NO ES VALIDO")
        break
}


console.log("-------- ciclos --------")
for (let index = 0; index < 10; index++) {

}

for (const item of [1, 2, 3]){
    console.log(item)
}

for (const key in materiaPreferida) {
    console.log(key)
}

[1, 2, 3] .forEach(element => {
    console.log(element )
});


console.log('------------- funciones ----------------')
function imprimirNombre(nombre) {
    console.log(nombre)
}


// llamada a la función
imprimirNombre("Jhon")


const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`)
}

imprimirNombreApellido(nombre, apellido)

const crearNombreCompleto = (nombre, apellido) => {
    console.log(nombre, apellido)
    console.log(nombre, apellido)
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + "  " + apellido
        console.log(name)
    }
    console.log("92 " + name)
}

//const botonesHtml = document.getElementById
crearNombreCompleto(nombre, apellido)
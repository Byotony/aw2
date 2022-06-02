const notasAlumnos=[
    {nota1: 2, nota2: 4, asignatura: { nombre: "Aplicaciones Web II" }, alumno: { nombre:"Miguel C."} },
    { nota1: 3, nota2: 2, asignatura: { nombre: "Aplicaciones Web II" }, alumno: { nombre: "Pedro S." } },
    { nota1: 5, nota2: 2, asignatura: { nombre: "Estructura de Datos" }, alumno: { nombre: "Juan P." } }
]

let reprobados = []
const validar = () =>{
    notasAlumnos.forEach(notasAlumnos => {

        if (notasAlumnos.asignatura.nombre == "Estructura de Datos") { // cambiar el nombre de la asignatura para mostart consulta.
            const suma = parseInt(notasAlumnos.nota1) + parseInt(notasAlumnos.nota2)
            if (suma<8) {
                reprobados.push(notasAlumnos.alumno.nombre)
            }
        }
    });
    return (reprobados)

}
console.log(validar()); 

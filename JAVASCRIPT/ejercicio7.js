//* ====== EJERCICIO 7 ======

const colegio = {
  cantidadProfesores: 5,
  cantidadAlumnos: 193,
  materiasDisponibles: [
    "Matematicas",
    "Psicologia",
    "Quimica",
    "Fisica",
    "Lengua",
    "Sociologia",
    "Etica",
    "Ciencias Sociales",
    "Ciencias Naturales",
    "Historia",
    "Filosofia",
    "Educacion Fisica",
  ],
  profesores: [
    {
      nombre: "Pablo Mendez",
      materiasHabilitadas: ["Quimica", "Matematicas", "Fisica"],
      totalAlumnos: 43,
      catedras: [
        {
          materia: "Fisica",
          alumnos: 18,
        },
        {
          materia: "Matematicas",
          alumnos: 25,
        },
      ],
    },
    {
      nombre: "Ana Gimenez",
      materiasHabilitadas: ["Lengua", "Matematicas"],
      totalAlumnos: 38,
      catedras: [
        {
          materia: "Psicologia",
          alumnos: 21,
        },
        {
          materia: "Lengua",
          alumnos: 15,
        },
      ],
    },
    {
      nombre: "Georgina Barrientos",
      materiasHabilitadas: [
        "Ciencias Sociales",
        "Ciencias Naturales",
        "Historia",
      ],
      totalAlumnos: 54,
      catedras: [
        {
          materia: "Fisica",
          alumnos: 17,
        },
        {
          materia: "Lengua",
          alumnos: 15,
        },
      ],
    },
    {
      nombre: "Carlos Benitez",
      materiasHabilitadas: ["Filosofia", "Ciencias Naturales", "Historia"],
      totalAlumnos: 31,
      catedras: [
        {
          materia: "Ciencias Sociales",
          alumnos: 10,
        },
        {
          materia: "Matematicas",
          alumnos: 15,
        },
      ],
    },
    ,
    {
      nombre: "Francisco Gonzalez",
      materiasHabilitadas: ["Matematicas", "Educacion Fisica"],
      totalAlumnos: 68,
      catedras: [
        {
          materia: "Matematicas",
          alumnos: 17,
        },
        {
          materia: "Educacion Fisica",
          alumnos: 25,
        },
      ],
    },
  ],
};

//* Crear una funcion que reciba el objeto "colegio" definido aquí arriba y retornar un arreglo de objetos el cual debe tener el siguiente formato
//* [
//*   {
//*     materia:
//*     ok:
//*   }
//* ]
//* donde "materia" es un string con el nombre de la materia, y "ok" es un booleano que indica si la materia disponible la tiene habilitada o no al menos un profesor.


function obtenerMateriasDisponibles(colegio) {
  const materiasDisponibles = colegio.materiasDisponibles;

  const materiasHabilitadas = {};

  colegio.profesores.forEach((profesor) => {
    profesor.materiasHabilitadas.forEach((materia) => {
      materiasHabilitadas[materia] = true;
    });
  });

  const resultado = [];

  materiasDisponibles.forEach((materia) => {
    const ok = materiasHabilitadas[materia] || false;
    resultado.push({ materia, ok });
  });

  return resultado;
}


console.log(obtenerMateriasDisponibles(colegio));

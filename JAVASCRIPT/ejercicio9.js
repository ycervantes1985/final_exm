//* ====== EJERCICIO 9 ======

const personas = [
  {
    nombre: "Fernando",
    apellido: "Gutierrez",
    domicilio: {
      calle: "Av.Lopez Torres",
      nro: 832,
    },
    deportes: ["Futbol", "Running"],
    datos: {
      profesion: null,
      casado: false,
      hijos: false,
      laboral: {
        actual: "Empresa ABC",
        experiencia: [
          {
            lugar: "Empresa ABC",
            duracion: 3,
            cargo: "Gerente General",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Ejecutivo de cuentas",
          },
          {
            lugar: "Empresa ZZZ",
            duracion: 5,
            cargo: "Administrativo",
          },
        ],
      },
    },
  },
  {
    nombre: "Nicolas",
    apellido: "Mendez",
    domicilio: {
      calle: "Av.Roque Perez",
      nro: 257,
    },
    deportes: null,
    datos: {
      profesion: "Analista en Ciencias de la Computación",
      casado: true,
      hijos: [
        {
          nombre: "Hernan",
          edad: 19,
        },
        {
          nombre: "Juana",
          edad: 12,
        },
      ],
      laboral: {
        actual: "Duendes S.R.L.",
        experiencia: [
          {
            lugar: "Duendes S.R.L.",
            duracion: 5,
            cargo: "Ejecutivo de ventas",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Administrativo",
          },
          {
            lugar: "Panadería Masas S.R.L.",
            duracion: 6,
            cargo: "Chef",
          },
        ],
      },
    },
  },
  {
    nombre: "Fabricio",
    apellido: "Leites",
    domicilio: {
      calle: "Alvear",
      nro: 217,
    },
    deportes: ["Tennis", "Futbol"],
    datos: {
      profesion: "Analista en Ciencias de la Computación",
      casado: true,
      hijos: false,
      laboral: {
        actual: "Empresa WWW",
        experiencia: [
          {
            lugar: "Empresa WWW",
            duracion: 5,
            cargo: "Gerente General",
          },
          {
            lugar: "Empresa ABC",
            duracion: 3,
            cargo: "Gerente Comercial",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Ejecutivo de cuentas",
          },
        ],
      },
    },
  },
  {
    nombre: "Lautaro",
    apellido: "Rodriguez",
    domicilio: {
      calle: "General Paz",
      nro: 596,
    },
    deportes: ["Ciclismo"],
    datos: {
      profesion: "Profesor de Educación Física",
      casado: true,
      hijos: false,
      laboral: {
        actual: "Empresa WWW",
        experiencia: [
          {
            lugar: "Electro-Card S.R.L.",
            duracion: 2,
            cargo: "Atención al Público",
          },
          {
            lugar: "Empresa WWW",
            duracion: 7,
            cargo: "Administrativo",
          },
          {
            lugar: "R&S Asoc",
            duracion: 3,
            cargo: "Atención al Público",
          },
        ],
      },
    },
  },
];

//* Crear una funcion que reciba 2 (dos) parámetros: el arreglo "personas" definido aquí arriba y un string con el nombre de algún cargo.
//* La función debe retornar lo siguiente:
//* Si el cargo pasado como argumento no se encuentra en el arreglo, retornar false.
//* En caso contrario, retornar un arreglo de objetos con el siguiente formato:
//* [
//*  {
//*     nombre:
//*     cargo:
//*     empresas:
//*     totalDuracion:
//*  }
//* ]
//* donde "nombre" es un string con el nombre del trabajador, "cargo" es el cargo solicitado, "empresas" es un arreglo de strings con los nombres de las empresas en las que el trabajador tuvo dicho cargo,
//* y "totalDuracion" es la sumatoria de la duración que tuvo ese trabajador en ese cargo.


function obtenerPersonasPorCargo(personas, nombreCargo) {
  const personasCargo = personas.filter((persona) => {
    const experiencia = persona.datos.laboral.experiencia;
    return experiencia.some((exp) => exp.cargo === nombreCargo);
  });

  if (personasCargo.length === 0) {
    return false;
  }

  const resultado = personasCargo.map((persona) => {
    const nombre = persona.nombre;
    const empresas = [];
    let totalDuracion = 0;

    const experiencia = persona.datos.laboral.experiencia;
    experiencia.forEach((exp) => {
      if (exp.cargo === nombreCargo) {
        empresas.push(exp.lugar);
        totalDuracion += exp.duracion;
      }
    });

    return { nombre, cargo: nombreCargo, empresas, totalDuracion };
  });

  return resultado;
}


console.log(obtenerPersonasPorCargo(personas, "Gerente General"));
console.log(obtenerPersonasPorCargo(personas, "Ejecutivo de cuentas"));

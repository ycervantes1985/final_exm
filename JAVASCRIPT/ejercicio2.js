//* ====== EJERCICIO 2 ======

const empresas = [
  {
    nombre: "Empresa1",
    informacion: {
      empleados: 75,
      direccion: {
        calle: "Av.San Luis",
        numero: 293,
      },
      secciones: [
        { nombre: "Comercio", empleadosDestinados: 20 },
        { nombre: "Construcción", empleadosDestinados: 5 },
        { nombre: "Obras", empleadosDestinados: 17 },
      ],
      locales: {
        local1: {
          telefono: 5652457875,
          empleados: 15,
          habilitado: true,
          especificaciones: { nombre: "Comercio", direccion: "Calle 285" },
        },
        local2: {
          telefono: 5285695875,
          empleados: 14,
          habilitado: false,
          especificaciones: {
            nombre: "Obras",
            direccion: "Av. Roque Perez 512",
          },
        },
        local3: {
          telefono: null,
          empleados: 29,
          habilitado: true,
          especificaciones: { nombre: "Comercio", direccion: "Calle 287" },
        },
        local4: {
          telefono: 5425875876,
          empleados: 17,
          habilitado: true,
          especificaciones: {
            nombre: "Obras",
            direccion: "Av. Saenz Peña 726",
          },
        },
      },
    },
  },
  {
    nombre: "Empresa2",
    informacion: {
      empleados: 99,
      direccion: {
        calle: "Calle Junin",
        numero: 329,
      },
      secciones: [
        { nombre: "Contabilidad", empleadosDestinados: 5 },
        { nombre: "Finanzas", empleadosDestinados: 32 },
        { nombre: "Auditoria", empleadosDestinados: 12 },
        { nombre: "Administracion", empleadosDestinados: 19 },
      ],
      locales: {
        local1: {
          telefono: null,
          empleados: 8,
          habilitado: false,
          especificaciones: { nombre: "Auditoria", direccion: "Calle ABC" },
        },
        local2: {
          telefono: 5862325625,
          empleados: 23,
          habilitado: false,
          especificaciones: {
            nombre: "Auditoria",
            direccion: "Av. Corrientes 179",
          },
        },
        local3: {
          telefono: 5685214785,
          empleados: 51,
          habilitado: true,
          especificaciones: { nombre: "Auditoria", direccion: "Calle 587" },
        },
        local4: {
          telefono: 5245854875,
          empleados: 17,
          habilitado: true,
          especificaciones: {
            nombre: "Administracion",
            direccion: "Av. Cabred 34",
          },
        },
      },
    },
  },
  {
    nombre: "Empresa3",
    informacion: {
      empleados: 70,
      direccion: {
        calle: "Av.Lopez Torres",
        numero: 934,
      },
      secciones: [
        { nombre: "Hotelería", empleadosDestinados: 8 },
        { nombre: "Turismo", empleadosDestinados: 12 },
        { nombre: "Atención al Público", empleadosDestinados: 15 },
      ],
      locales: {
        local1: {
          telefono: 5487521493,
          empleados: 10,
          habilitado: true,
          especificaciones: {
            nombre: "Hotelería",
            direccion: "Av. Roca 746",
          },
        },
        local2: {
          telefono: null,
          empleados: 15,
          habilitado: false,
          especificaciones: {
            nombre: "Atención al Público",
            direccion: "Calle Córdoba 312",
          },
        },
        local3: {
          telefono: 5862548751,
          empleados: 20,
          habilitado: true,
          especificaciones: {
            nombre: "Turismo",
            direccion: "Felix de Azara 857",
          },
        },
        local4: {
          telefono: 5632587845,
          empleados: 25,
          habilitado: false,
          especificaciones: {
            nombre: "Turismo",
            direccion: "Felix de Azara 426",
          },
        },
      },
    },
  },
];

//* Crear una funcion que reciba 3 parámetros: el arreglo empresas definido aquí arriba, el nombre de una empresa, y una sección.
//* Retornar un booleano verificando si la totalidad de empleados asignados a esa sección se encuentra dentro de la capacidad total soportada por la misma.
//* En caso de que la empresa a buscar no se encuentre, retornar un string que diga "Empresa no encontrada"
//* En caso de que la seccion a consultar no sea una valida para esa empresa, retornar un string que diga "Sección inválida para esta empresa"


function verificarCapacidad(empresas, nombreEmpresa, seccion) {
  let empresaEncontrada = false;
  let seccionValida = false;

  for (const empresa of empresas) {
    if (empresa.nombre === nombreEmpresa) {
      empresaEncontrada = true;
      const secciones = empresa.informacion.secciones;

      for (const sec of secciones) {
        if (sec.nombre === seccion) {
          seccionValida = true;
          const empleadosDestinados = sec.empleadosDestinados;

          let empleadosAsignados = 0;
          const locales = empresa.informacion.locales;

          for (const local in locales) {
            empleadosAsignados += locales[local].empleados;
          }

          return empleadosAsignados <= empleadosDestinados;
        }
      }
    }
  }

  if (!empresaEncontrada) {
    return "Empresa no encontrada";
  }

  if (!seccionValida) {
    return "Sección inválida para esta empresa";
  }
}


const nombreEmpresa = "Empresa1";
const seccion = "Comercio";
console.log(verificarCapacidad(empresas, nombreEmpresa, seccion));

// Forma 1 //
function ciclo(inicio, prueba, actualizacion, cuerpo) {
  while (prueba(inicio)) {
    cuerpo(inicio);
    inicio = actualizacion(inicio);
  }
}

// Ejemplo de uso
const inicio = 5;

ciclo(
  inicio,
  (v) => v > 0,
  (v) => v - 2,
  (v) => console.log(v)
);

export function formatDate(date: string) {
  const fechaFormateada = new Date(date);
  return fechaFormateada.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

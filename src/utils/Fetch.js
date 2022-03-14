const Api = async (sendUrl) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_URL_API}${sendUrl}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    // Se añade la bandera de error
    return false;
  }
};
// Función para el llamado a la Api con Fetch y una url custom
const ApiDetails = async (sendUrl) => {
  try {
    const response = await fetch(`${sendUrl}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    // Se añade la bandera de error
    return false;
  }
};

export { Api, ApiDetails };

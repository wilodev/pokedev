// Función para el llamado a la Api con Fetch
const Api = async (sendUrl) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_URL_API}${sendUrl}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};
// Función para el llamado a la Api con Fetch y una url custom
const ApiDetails = async (sendUrl) => {
  const response = await fetch(`${sendUrl}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
export { Api, ApiDetails };

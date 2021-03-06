// // Función para extraer el color apartir de una imagen
// const getColorsPokemon = (imgSrc) => {
//   // Array para almacenar los colores de la imagen
//   const arrayColors = [];
//   // Se crea una instancia virtual de la imagen
//   const img = new Image();
//   img.setAttribute("crossOrigin", "Anonymous");
//   // Se le asigna la url de la imagen
//   img.setAttribute("src", imgSrc);
//   // Se asigna el ancho y alto de la imagen
//   img.setAttribute("width", 96);
//   img.setAttribute("height", 96);
//   // Se crea una instancia virtual de un canvas
//   const canvas = document.createElement("canvas");
//   // Se le asigna el ancho y alto del canvas
//   canvas.width = img.width;
//   canvas.height = img.height;
//   // Se crea un contexto para el canvas
//   const ctx = canvas.getContext("2d");
//   // Se limpia el canvas
//   ctx.clearRect(0, 0, img.width, img.height);
//   // Se dibuja la imagen en el canvas
//   ctx.drawImage(img, 0, 0, img.width, img.height);
//   // Se obtiene el array de pixeles de la imagen
//   const imgData = ctx.getImageData(
//     Math.trunc(canvas.width / 2),
//     Math.trunc(canvas.height / 2),
//     5,
//     5
//   ).data;
//   // Se recorre el array de pixeles
//   for (let i = 0; i < imgData.length; i = i + 4) {
//     const red = imgData[i];
//     const green = imgData[i + 1];
//     const blue = imgData[i + 2];
//     arrayColors[i] = [red, green, blue];
//   }
//   // Se elimina las instancias antes creadas
//   canvas.remove();
//   img.remove();
//   // Se retorna el array de colores
//   return arrayColors;
// };
// // Función para convertir de RBG a HEX
// const convertRGB2HX = (r, g, b) =>
//   "#" +
//   [r, g, b]
//     .map((x) => {
//       const hex = x.toString(16);
//       return hex.length === 1 ? "0" + hex : hex;
//     })
//     .join("");
// export { getColorsPokemon };

const loadImage = async (url) => {
  //  Retornamos una promesa cuando la imagen este lista para poder usarse en su entorno virtual
  return new Promise((resolve, reject) => {
    // Se crea una instancia virtual de la imagen
    const img = new Image();
    // Se crea la función resolver cuando la imagen termina de cargar
    img.onload = () => resolve(img);
    // Se crea la función rechazar cuando la imagen no se puede cargar
    img.onerror = (err) => reject(err);
    img.setAttribute("crossOrigin", "Anonymous");
    // Se le asigna la url de la imagen
    img.setAttribute("src", url);
    // Se asigna el ancho y alto de la imagen
    img.setAttribute("width", 96);
    img.setAttribute("height", 96);
    // Se retorna la imagen
    return img;
  });
};
// Función para extraer el color apartir de una imagen
const getColorsPokemon = async (pokemons) => {
  // Recorremos un loop de todos los pokemons
  return Promise.all(
    pokemons.map(async (pokemon) => {
      // Array para almacenar los colores de la imagen
      const arrayColors = [];
      // Se crea una instancia virtual de la imagen
      const img = await loadImage(pokemon.sprites.front_default);
      // Se crea una instancia virtual de un canvas
      const canvas = document.createElement("canvas");
      // Se le asigna el ancho y alto del canvas
      canvas.width = img.width;
      canvas.height = img.height;
      // Se crea un contexto para el canvas
      const ctx = canvas.getContext("2d");
      // Se limpia el canvas
      ctx.clearRect(0, 0, img.width, img.height);
      // Se dibuja la imagen en el canvas
      ctx.drawImage(img, 0, 0, img.width, img.height);
      // Se obtiene el array de pixeles de la imagen
      const imgData = ctx.getImageData(
        Math.trunc(canvas.width / 2),
        Math.trunc(canvas.height / 2),
        4,
        4
      ).data;
      // Se recorre el array de pixeles
      for (let i = 0; i < imgData.length; i = i + 4) {
        const red = imgData[i];
        const green = imgData[i + 1];
        const blue = imgData[i + 2];
        arrayColors[i] = [red, green, blue];
      }
      // Se elimina las instancias antes creadas
      canvas.remove();
      img.remove();
      // Se retorna el array de colores
      return { ...pokemon, bgColors: arrayColors };
    })
  );
};
// Función para convertir de RBG a HEX
const convertRGB2HX = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
export { getColorsPokemon };

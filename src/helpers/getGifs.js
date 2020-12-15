// asynx --> regresa una promesa que resuelve coleccion de imagenes

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }Z&api_key=0yyLINebjIX7rDU9vqfBoIZ71Uv3TcSE`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            // ? --> operador de navegación segura o encadenamiento opcional.
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    // setimages(gifs);
    return gifs;

}
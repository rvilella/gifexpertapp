// import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [count, setcount] = useState(0);
    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    // // se utiliza para que se recargue una sola vez al inicio y no cada vez que se modifique algo
    // useEffect(() => {
    //     getGifs(category)
    //         // .then(imgs => setImages(imgs))
    //         .then(setImages)
    // }, [category]);
    // // Si la categoria cambia, vuelve a ejecutar el effect


    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {/* {loading ? <p>Cargando...</p> : <p>Cargado completo</p>} */}
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">
                {/* <h3>{count}</h3>
                <button onClick={ () => setcount(count + 1)}></button> */}
                {/* <ol> */}
                    {
                        // images.map(img => (
                        // <li key={img.id}>{img.title}</li>
                        // ))

                        images.map( img => (
                            <GifGridItem
                                key={img.id}
                                // img={img}
                                // Se envía cada una de las propiedades de las imagenes, como una propiedad independiente
                                {...img}
                            />
                    ))




                    }
                {/* </ol> */}
            </div>
        </>
    )
}

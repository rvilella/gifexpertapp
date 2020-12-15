import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Death Note', 'Dragon Ball Z', 'Pokemon'];
    // const [categories, setCategories] = useState(['Death Note', 'Dragon Ball Z', 'Pokemon']);
    const [categories, setCategories] = useState(['Homero Simpson']);

    // const handleAdd = () => {
    //     // categories.push('Digimon'); NO USAR
    //     // se mantienen las categorías anteriores y se agrega una nueva
    //     // setCategories([...categories, 'Digimon']); se agrega al final
    //     // setCategories(['Digimon', ...categories]);
    //     setCategories(cats => [...cats, 'Digimon']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    // categories.map((category) => {
                    // return <li key={category}> {category} </li>
                    // })
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>

        </>
    )
}

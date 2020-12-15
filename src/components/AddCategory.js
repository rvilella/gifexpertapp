import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    // const [inputValue, setInputValue] = useState('Escriba aquí...');
    const [inputValue, setInputValue] = useState('');

    // Captura el texto de la caja de texto
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue( e.target.value );
    }
    
    const handleSubmit = (e) => {
        // Evita que se recargue la página completa
        e.preventDefault();

        if(inputValue.trim().length > 2){
            // console.log('Submit hecho');
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return (
        // Se quita el fragment ya que el formulario se encarga de agrupar todos los elementos (seria redundante)
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
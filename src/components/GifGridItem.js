import React from 'react';

// export const GifGridItem = (props) => {    --> Para trabajar con {...img}
//     console.log(props);

export const GifGridItem = ({id, title, url}) => {
    console.log(title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

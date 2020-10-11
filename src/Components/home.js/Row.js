import React from 'react';
import './row.css'
import {Link} from 'react-router-dom'

export const PopRow = (props)=>{
    return(
        <div className="poprow d-flex justify-content-start my-3">
            {props.popular.map((data)=>{
                return(
                <div className="ml-3">
                <Link to={`/movie/${data.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="image" />
                    </Link>
                </div>
                    )
            })}
        </div>
    )

}

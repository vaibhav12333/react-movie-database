import React from 'react';
import './row.css'
import {Link} from 'react-router-dom'

export const RowPeople = (props)=>{
    return(
        <div className="poprow d-flex justify-content-start my-3">
            {props.popular.map((data)=>{
                return(
                <div className="ml-3">
                    <img src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`} className="image" />
                </div>
                    )
            })}
        </div>
    )

}

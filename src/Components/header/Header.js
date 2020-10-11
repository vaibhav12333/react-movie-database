import React from 'react';
import {Jumbotron} from 'reactstrap'
import './header.css'
import {Link} from 'react-router-dom'

export const Header = (props)=>{
    return(
        <React.Fragment>
      <Jumbotron fluid className="jumbotron">
          <h1 className="heading-1">Welcome.</h1>
          <p className="heading-1 d-none d-md-block">Millions of movies, TV shows and people to discover</p>
          <Link to={`/search`}>
    <input type="text" className="col-10 col-md-8  mt-4  rounded-pill p-2 pos" placeholder="Search for a Movie and TV shows..." onKeyPress={props.handleChange} />
    </Link>
      </Jumbotron>
        </React.Fragment>
    )   
}
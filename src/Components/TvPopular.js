import React,{ Component} from 'react'
import {Button,Card,CardBody,CardSubtitle,CardTitle,CardImg} from 'reactstrap'
import {fetchTv} from '../api';
import {Link} from 'react-router-dom'

 
class TvPopular extends Component {
 constructor(props){
     super(props);
    
 }

   render(){
       
    return(
        <div className="container">

            <div className="row">
                
             {
                 this.props.popular.map((movie)=>{
                    return(
                        <div className="col-3">
                            <Link to={`/tv/${movie.id}`} >
                            <Card>
                                <CardImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} wrapped/>
                                <CardBody>
                                <CardTitle>{movie.original_name}</CardTitle>
                                <CardSubtitle>{movie.first_air_date}</CardSubtitle>

                            </CardBody>
                            </Card>
                            </Link>

                        </div>
                    )
                })
            } 
        </div>
            <Button onClick={this.props.handleClick} className="btn-success load p-3 my-3">Load More</Button>
        </div>
    )
}
}

export default  TvPopular
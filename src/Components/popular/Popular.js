import React,{ Component} from 'react'
import './popular.css'
import {Button,Card,CardBody,CardSubtitle,CardTitle,CardImg} from 'reactstrap'
import {fetchPopular} from '../../api';
import {Link} from 'react-router-dom'

 
class Popular extends Component {
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
                            <Link to={`/movie/${movie.id}`} >
                            
                             <Card>
                                <CardImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} wrapped/>
                                <CardBody>
                                <CardTitle>{movie.original_title}</CardTitle>
                                <CardSubtitle>{movie.release_date}</CardSubtitle>

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

export default  Popular
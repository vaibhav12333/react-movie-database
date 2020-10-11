import React,{ Component} from 'react'
import {Button,Card,CardBody,CardSubtitle,CardTitle,CardImg} from 'reactstrap'

 
class People extends Component {
 constructor(props){
     super(props);
    
 }

   render(){
       
    return(
        <div className="container">

            <div className="row">
                
             {
                 this.props.people.map((movie)=>{
                    return(
                        <div className="col-3">
                            <Card>
                                <CardImg src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`} wrapped/>
                                <CardBody>
                                <CardTitle>{movie.name}</CardTitle>
                                <CardSubtitle>{movie.known_for_department}</CardSubtitle>

                            </CardBody>
                            </Card>

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

export default  People
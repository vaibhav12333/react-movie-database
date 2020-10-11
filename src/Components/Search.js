import   React,{Component} from 'react'
import {Button,Card,CardBody,CardSubtitle,CardTitle,CardImg} from 'reactstrap'
import {Link} from 'react-router-dom'



class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            page:1
        }
    }

    render(){
    return(
        <div className="container">

        <div className="row">
            
         {
             this.props.data.map((movie)=>{
                return(

                    <div className="col-3">
                        <Link to={`/${movie.media_type}/${movie.id}`} >
                        
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
    </div>
    )
    
}
}



export default Search
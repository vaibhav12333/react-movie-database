import React, { Component} from 'react';
import {fetchCreditsTv,fetchTvDetails} from '../api';
import './details.css'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'


class DetailsTv extends Component {
    constructor(props){
        super(props);
        this.state ={
            credits:[],
            details:[]
        }
    }
async componentDidMount(){
    const data = await fetchCreditsTv(this.props.id)
    console.log(data)
    this.setState({ credits:data.data.cast})
    const details = await fetchTvDetails(this.props.id)
    console.log(details)
    this.setState({ details:details.data})
}


render(){
        const details = this.state.details
    return(
    <React.Fragment>
    <div className="movie-info" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),url(https://image.tmdb.org/t/p/w500/${this.state.details.backdrop_path})`
    }}>
        <div className="movie-info-content">
            <div className="movie-info-thumb">
                <img className="ima" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
            </div>
            <div className="movie-info-text text-left">
            <h1 className="h1">{details.original_name}</h1>    
            <p className="mt-2 p">{details.overview}</p>
            </div>
        </div>
    </div>
    <div className="container">
    <h1>Credits</h1>
    <div className="row">
    
    {this.state.credits.map((cast)=>{return(
    <div className="col-6 col-md-4">
        <Card>
            <CardImg src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} />
            <CardBody>
                <CardTitle>{cast.name}</CardTitle>
            </CardBody>
        </Card>
        </div>
    )

    })}
    </div>
    </div>
    </React.Fragment>)
}
}
export default DetailsTv

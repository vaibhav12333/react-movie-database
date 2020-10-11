import React,{Component} from 'react';
import {Header} from './header/Header'
import {Navb} from './nav/Nav';
import {Switch,Route,Redirect,Link} from 'react-router-dom'
import Popular from './popular/Popular'
import TvPopular from './TvPopular'
import Details from './DetailsMovie'
import DetailsTv from './DetailsTv'
import People from './People'
import {fetchPopular,fetchTv,fetchPeople,fetchCreditsMovie,fetchCreditsTv, fetchSearch} from '../api'
import Search from './Search'

import Home from './home.js/Home'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularTv:[],
            popular:[],
            pagenoTv:1,
            pageno:1,
            people:[],
            pagePeople:1,
            search: '',
            searchData:[]
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMovieClick = this.handleMovieClick.bind(this);
        this.handlePeopleClick=this.handlePeopleClick.bind(this);
        this.handleCreditsTv = this.handleCreditsTv.bind(this);
        this.handleCreditsMovie = this.handleCreditsMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount(){
    const Tvpopular = await fetchTv(this.state.pagenoTv)
    this.setState({popularTv:Tvpopular.data.results})
    console.log(Tvpopular.data.results)
    const popular = await fetchPopular(this.state.pageno)
    this.setState({popular:popular.data.results})
    const people = await fetchPeople(this.state.pagePeople)
    this.setState({people:people.data.results})
    }
    handleChange=(e)=>{
        if(e.charCode===13){
            this.setState({search:e.target.value})
            console.log(this.state.search)
        const search = async()=>{
            const data = await fetchSearch(e.target.value)
            this.setState({searchData:data.data.results})
            console.log(data)
        }  
        search();
        }        
    }
    handleClick=()=>{
        this.setState({pagenoTv:parseInt(this.state.pagenoTv+1)})
        console.log(this.state.pagenoTv)
       const fetchPage = async()=>{
           const morePopular = await fetchTv(this.state.pagenoTv+1);
           this.setState({...this.state,popularTv:this.state.popularTv.concat(morePopular.data.results)})
       }
       fetchPage();
   
    }
    handleMovieClick=()=>{
        this.setState({pageno:parseInt(this.state.pageno+1)})
        console.log(this.state.pageno)
       const fetchPage = async()=>{
           const morePopular = await fetchPopular(this.state.pageno+1);
           this.setState({...this.state,popular:this.state.popular.concat(morePopular.data.results)})
       }
       fetchPage();
   
    }
    handlePeopleClick=()=>{
        this.setState({pagePeople:parseInt(this.state.pagePeople+1)})
        console.log(this.state.pagePeople)
       const fetchPage = async()=>{
           const morePopular = await fetchPeople(this.state.pagePeople+1);
           this.setState({...this.state,people:this.state.people.concat(morePopular.data.results)})
       }
       fetchPage();
   
    }
    handleCreditsMovie= async(id)=>{
        const data = await fetchCreditsMovie(id)
        return data
    }
    handleCreditsTv= async(id)=>{
        const data = await fetchCreditsTv(id)
        return data
    }
    
   
    
    render(){
         const DetailsMovie = ({match})=>{
        return(
           <Details  id = { parseInt(match.params.idpop,10)} />  
           
        )
            } 
            const DetailsT = ({match})=>{
                return(
                    <DetailsTv id={parseInt(match.params.idtv,10)} />
                )
            }
            
    
        return(

            <React.Fragment>
            <Navb />
           
            <Switch>
            <Route path='/movie/:idpop'  component={DetailsMovie}/>
            <Route path='/tv/:idtv'  component={DetailsT} />
           <Route path='/search'>
               <Header handleChange={this.handleChange}/>
               <Search query={this.state.search} data={this.state.searchData}/>
           </Route>
            <div className='container-fluid'>
           
            <Route path='/home'>
            <Header handleChange={this.handleChange} />
            <Home pop={this.state.popular} popTv={this.state.popularTv} people={this.state.people}/>
            </Route>
             <Route path='/movies'>   <Popular popular={this.state.popular} handleClick={this.handleMovieClick} /> </Route>
            <Route path='/tv-shows'> <TvPopular popular={this.state.popularTv} handleClick={this.handleClick}/></Route>
            <Route path='/people'><People people={this.state.people} handleClick={this.handlePeopleClick}/></Route> 
            </div>
               </Switch>
           
            </React.Fragment>
        )
    }
}

export default Main
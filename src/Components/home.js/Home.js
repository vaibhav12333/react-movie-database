import React, { Component }from 'react';
import './home.css'
import {PopRow} from './Row'
import { RowTv } from './RowTv';
import {RowPeople} from  './RowPeople'

class Home extends Component {
    constructor(props) {
        super(props);
        
       
    }
   
    render(){
        return(
        <React.Fragment>
            <div>
                <h2 className="text-left ml-2"><strong>Popular Movies</strong></h2>
                <PopRow popular={this.props.pop} />
            </div>
             <div>
             <h2 className="text-left ml-2"><strong>Popular Tv Shows</strong></h2>
             <RowTv popular={this.props.popTv} />
         </div>
         <div>
             <h2 className="text-left ml-2"><strong>People</strong></h2>
             <RowPeople popular={this.props.people} />
         </div>
          </React.Fragment>
        )
    }
}

export default Home
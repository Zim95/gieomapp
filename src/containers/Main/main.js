import React, {Component} from 'react';
import axios from 'axios';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

import Cards from '../../components/Cards/Cards';
import {Spinner} from 'react-mdl';

import './main.css';

class Main extends Component{
    componentWillMount(){
        this.props.onFetchBeer();
    }
    render(){
        let cards = null;
        if(this.props.loading){
            cards = <Spinner style={{"marginLeft":"50%"}}/>
        }
        if(this.props.error != null){
            cards = <p>an error occured</p>
        }
        if(this.props.data != null){
            cards = <Cards list={this.props.data}/>
        }
        return(
            <div className="Main"> 
                
                {cards}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.beer.data,
        loading: state.beer.loading,
        error: state.beer.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchBeer: () => dispatch(actions.getBeer())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
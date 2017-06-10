import React from 'react';

import youtube from 'youtube-api-search';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchComponent from './search_component';
import SearchResults from './search_results';
import SearchActions from '../actions/index';

const styles= {
        margin:'20px 10px',
        padding:'10px'
    }

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: null
        }
    };

    searchYoutube = (searchtext) =>{
        if(searchtext.trim()!=""){
            this.props.SearchActions(searchtext);
        }
        else{
            this.props.results:[];
        }
    };
    
    componentDidMount(){
        debugger;
        this.searchYoutube('amirkhan');
    }

    onVideoSelect(selectedVideo){
        this.setState({selectedVideo:selectedVideo});
    };

    componentWillReciveProps(nextProps){
        this.setState({selectedVideo:nextProps.selectedVideo});
    }

    render(){
        return (
            <div style={styles}>                
                <SearchComponent onSearchTermChange={this.searchYoutube}/>
                <SearchResults results={this.props.results} onVideoSelect={(selectedVideo)=>this.onVideoSelect(selectedVideo)}/>
            </div>
        );
    };
};

//Map the state as props to flux
var mapStateToProps=(state)=>{
    return{
        results:state.results,
        selectedVideo: state.results[0]
    };    
};

//Bind the action from reactview to action action creators
var mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({SearchActions},dispatch);    
};

//connect React with Flux
export default connect(mapStateToProps, mapDispatchToProps)(SearchApp);
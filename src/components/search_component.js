import React from 'react';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ""}
    };

    render() {        
        return ( 
            <div className="input-group">            
                <input id="search" ref="search" className="form-control" placeholder="Search"  onKeyDown={event => this.onKeyPressed(event) }/>       
                <span className="input-group-addon" onClick={event => this.onSearchClicked(this)}>
                        <i className="fa fa-search"></i>
                </span>
            </div>
        );
    }; 

    onSearchClicked(event) {
        this.props.onSearchTermChange(this.refs.search.value);
    };
    onKeyPressed(event) {
        if(event.which == 13){
            this.props.onSearchTermChange(this.refs.search.value);
        }
    };
}
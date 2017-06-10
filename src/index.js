//import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//
////import FirstComponent from './components/fisrtcomponent';
////import SecondComponent from './components/secondComponent';
//import SearchApp from './components/search_app';
//
//
//
////Instantiating a react component
////ReactDOM.render( <SearchComponent/>, document.querySelector('.container'));
//ReactDOM.render( <SearchApp/>, document.querySelector('.container'));


import React from 'react';
import ReactDOM  from 'react-dom';
//import FirstComponent from './components/firstcomponent';
//import SearchComponent from './components/search_component'
import SearchApp from './components/search_app';
import {Provider} from 'react-redux';

import stores from './stores/searchStore';

import ReduxPromise from 'redux-promise';

import {createStore,applyMiddleware} from 'redux';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Connect Store With The Reducer
const store=createStoreWithMiddleware(stores);

// Register Views With The Stores
ReactDOM.render(<Provider store={store}><SearchApp /></Provider>,
				document.querySelector('.appcontainer'))


//ReactDOM.render(
//				<SearchApp/>
//				,
//document.querySelector('.container'))
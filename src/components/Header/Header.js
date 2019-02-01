import React from 'react';
import Navigation from '../Navigation/Navigation';

import {Header} from 'react-mdl';
import SearchBar from '../Searchbar/SearchBar';

import './Header.css';

const header = (props) => {
    return (
        <Header title={<span><strong>{props.title}</strong></span>}>
            <SearchBar/>
            <Navigation/>          
        </Header>
    );
};

export default header;
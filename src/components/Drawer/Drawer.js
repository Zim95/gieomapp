import React from 'react';
import Navigation from '../Navigation/Navigation';
import {Drawer} from 'react-mdl';
import SearchBar from '../Searchbar/SearchBar';

const drawer = (props) => {
    return (
        <Drawer title={props.title}>
            <SearchBar/>
            <Navigation/>
        </Drawer>
    );
};

export default drawer;
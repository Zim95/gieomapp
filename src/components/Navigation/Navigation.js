import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navigation} from 'react-mdl';

const navigation = () => {
    return (
        <Navigation>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/cart">Goto Cart</NavLink>
            <NavLink to="/authenticate">Signup/Login</NavLink>
        </Navigation>
    );
}

export default navigation;
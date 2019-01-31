import React from 'react';
import { Menu } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {navigateUser} from '../../store/actions';

const NavBar = ({nav, browseTo}) => {
    const handleMenuClick = (e, { name }) => {
        browseTo(name);
    }
    return (
            <Menu pointing secondary>
                <Menu.Item 
                    name="home" 
                    active={nav.active === "home"} 
                    as={Link} to="/"
                    onClick={handleMenuClick} />
                <Menu.Item
                    name="favorite"
                    as={Link}
                    to="/favorite"
                    active={nav.active === "favorite"}
                    onClick={handleMenuClick}
                />
            </Menu>
    )
}

const mapStateToProps =(state) => {
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps, { browseTo: navigateUser})(NavBar);

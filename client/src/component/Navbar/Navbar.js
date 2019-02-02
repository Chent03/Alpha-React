import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const NavBar = ({location}) => {
    return (
            <Menu pointing secondary>
                <Menu.Item 
                    name="home" 
                    active={location.pathname === "/"} 
                    as={Link} to="/"
                    />
                <Menu.Item
                    name="favorites"
                    as={Link}
                    to="/favorite"
                    active={location.pathname.includes("favorite")}
                />
            </Menu>
    )
}

export default withRouter(NavBar);

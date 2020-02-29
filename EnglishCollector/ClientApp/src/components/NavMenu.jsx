import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';

export class NavMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header>
            <Navbar color="light" light>
                <NavbarBrand tag={Link} to=""> English Collector </NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink tag={Link} to="/vocabulary/VocabularyGrid"> Vocabulary </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    }
}
﻿import React from 'react'
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
                        <NavLink tag={Link} to='/cards/CardsGrid'> Cards </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/vocabulary"> Vocabulary </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/vocabularytest"> Vocabulary Test </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/import/VocabularyImport"> Import </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    }
}
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Background } from '../banner/styles/banner';
import { Wrapper, Container, Logo, Button, Select, Dropdown, SearchBar, ProfilePicture, DropdownIcon, Icon, SearchIcon, LinkModal, LinkWrapper, List, Link } from './styles/navbar';
const logo = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';


export default function Navbar({children, ...props}) {

    return (
        <Wrapper {...props} >
            <RouterLink to='/'>
                <Logo src={logo} alt="Netlix"/>
            </RouterLink>
            { children }
        </Wrapper>
    )
}

Navbar.Button = function({children, ...props}) {
    return <Button {...props}> { children } </Button>
}
Navbar.Dropdown = function({children, ...props}) {
    return <Dropdown {...props}> { children } </Dropdown>
}

Navbar.Select = function({children, ...props}) {
    return <Select {...props}> { children } </Select>
}

Navbar.SearchBar = function({children, ...props}) {
    return <SearchBar {...props}/> 
}

Navbar.SearchIcon = function({children, ...props}) {
    return <SearchIcon {...props}/> 
}

Navbar.ProfilePicture = function({children, ...props}) {
    return <ProfilePicture {...props}/>
}

Navbar.LinkWrapper = function({ children, ...props}) {
    return <LinkWrapper {...props}>{children}</LinkWrapper>
}

Navbar.Container = function({children, ...props}) {
    return <Container {...props}> { children } </Container>
}

Navbar.DropdownIcon = function({children, ...props}) {
    return <DropdownIcon {...props} /> 
}

Navbar.Icon = function({children, ...props}) {
    return <Icon {...props} /> 
}

Navbar.LinkModal = function({children, ...props}) {
    return <LinkModal {...props}> {children} </LinkModal>
}

Navbar.List = function({children, ...props}) {
    return <List {...props}> { children } </List>
}

Navbar.Link = function({children, ...props}) {
    return <Link {...props}> { children } </Link>
}

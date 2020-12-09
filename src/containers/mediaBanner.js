import React, { useState, useContext, useEffect } from 'react';
import { Header } from '../components';
import { Navbar } from '../components';
import { useAuthListener } from '../hooks';
import { FirebaseContext } from '../context/firebase';

export default function MediaBanner() {

    const [navbar, setNavbar] = useState(null);
    const [searchBar, setSearchBar] = useState('');
    const [category, setCategory] = useState('');
    const [startSearch, setStartSearch] = useState('');
    const { user } = useAuthListener();
    const primaryButton = true;
    const { firebase } = useContext(FirebaseContext);
    let photoURL = user.photoURL;
    const profilePicture = `/images/users/${photoURL}.png`;


    const logout = () => {
         firebase.auth().signOut()
    }

    return (
        <Header hide={ category }>
            <Header.Overlay>
            <Navbar>
                <Navbar.LinkWrapper>
                <Navbar.Container>
                        <Navbar.List>
                            <Navbar.Link
                                active={ category === '' ? true : false }
                                onClick={() => setCategory('')}
                                > Home 
                            </Navbar.Link>
                        </Navbar.List>
                        <Navbar.List>
                            <Navbar.Link 
                                active={ category === 'series' ? true : false }
                                onClick={() => setCategory('series')}> TV Shows 
                            </Navbar.Link>
                        </Navbar.List>
                        <Navbar.List>
                            <Navbar.Link 
                                active={ category === 'movies' ? true : false}
                                onClick={() => setCategory('movies')}> Movies 
                            </Navbar.Link>
                        </Navbar.List>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.List>
                    <Navbar.SearchIcon 
                        active={searchBar} 
                        src='/images/icons/search.svg' 
                        onClick={() => setStartSearch(startSearch => !startSearch)} 
                        value={searchBar}
                    />
                    <Navbar.SearchBar
                        active={startSearch} 
                        value={searchBar}
                        placeholder="Titles, People, Genres" onChange={({target}) => setSearchBar(target.value)}
                    />
                    </Navbar.List>
                    <Navbar.List>
                    <Navbar.LinkModal>
                        <Navbar.ProfilePicture src={profilePicture}/>
                        <Navbar.DropdownIcon src='/images/icons/arrow.svg'/>
                            <Navbar.Dropdown>
                                <Navbar.Select>
                                {user.displayName}
                                </Navbar.Select>
                                <Navbar.Select onClick={logout}>
                                    Logout of Netflix
                                </Navbar.Select>
                            </Navbar.Dropdown>
                        </Navbar.LinkModal>
                    </Navbar.List>
                </Navbar.Container>
                </Navbar.LinkWrapper>
            </Navbar>
            <Header.DesciptionContainer hide={ category }>
               <Header.Title> AVA </Header.Title>
               <Header.Subtitle> 
               Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown,
               </Header.Subtitle>
               <Header.Group>
                    <Header.Button primary={primaryButton}>
                    <Navbar.Icon src='/images/icons/arrow.svg'/>
                    Play
                    </Header.Button>
                    <Header.Button primary={!primaryButton}>
                    <Navbar.Icon src='/images/icons/info.svg'/>
                    More Info
                    </Header.Button>
               </Header.Group>
            </Header.DesciptionContainer>
        </Header.Overlay>
        </Header>
    )
}

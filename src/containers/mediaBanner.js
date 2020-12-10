import React, { useState, useContext } from 'react';
import { Header } from '../components';
import { Navbar } from '../components';
import { useAuthListener } from '../hooks';
import { FirebaseContext } from '../context/firebase';

export default function MediaBanner() {

    const [searchBar, setSearchBar] = useState('');
    const [category, setCategory] = useState('');
    const [hideIcon, setHideIcon] = useState(false)
    const [startSearch, setStartSearch] = useState('');
    const [modal, setModal] = useState(false)
    const { user } = useAuthListener();
    const primaryButton = true;
    const { firebase } = useContext(FirebaseContext);
    let photoURL = user.photoURL;
    const profilePicture = `/images/users/${photoURL}.png`;
    console.log(modal)


    const logout = () => {
         firebase.auth().signOut()
    }
    const toggleSearch = () => {
        setHideIcon(!hideIcon) 
        setStartSearch(startSearch => !startSearch)
    }
    const showModal =() => {
        setModal(modal => !modal)
    }

    return (
        <Header hide={ category }>
            <Header.Overlay>
            <Navbar>
                <Navbar.LinkWrapper>
                <Navbar.Container display='none'>
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
                            hide={hideIcon}
                            src='/images/icons/search.svg' 
                            onClick={toggleSearch } 
                            value={searchBar}
                        />
                        <Navbar.SearchBarContainer
                            active={startSearch} >
                            <Navbar.SearchIcon
                                onClick={toggleSearch} 
                                value={searchBar}
                            />
                            <Navbar.SearchBar 
                                value={searchBar}
                                placeholder="Titles, People, Genres" onChange={({target}) => setSearchBar(target.value)}
                            />
                        </Navbar.SearchBarContainer>
                    </Navbar.List>
                    <Navbar.List>
                    <Navbar.LinkModal >
                        <Navbar.ProfilePicture src={profilePicture} alt='profile settings' onMouseOver={() => setModal(true)} />
                        <Navbar.DropdownIcon onClick={showModal} />
                            <Navbar.Dropdown modal={modal} onMouseOut={showModal}>
                                <Navbar.Select>
                                <img src={profilePicture}/>
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
               Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.
               </Header.Subtitle>
               <Header.Group>
                    <Header.Button primary={primaryButton}>
                    <Navbar.Icon src='/images/icons/arrow.svg' alt='Play'/>
                    Play
                    </Header.Button>
                    <Header.Button primary={!primaryButton}>
                    <Navbar.Icon src='/images/icons/info.svg' alt='More info'/>
                    More Info
                    </Header.Button>
               </Header.Group>
            </Header.DesciptionContainer>
        </Header.Overlay>
        </Header>
    )
}

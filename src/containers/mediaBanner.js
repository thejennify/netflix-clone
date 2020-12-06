import React, { useState, useContext, useEffect } from 'react';
import { Header } from '../components';
import { Navbar } from '../components';
import { useAuthListener } from '../hooks';
import { FirebaseContext } from '../context/firebase';
import { useHistory, Redirect }  from 'react-router-dom';


export default function MediaBanner() {
const [navbar, setNavbar] = useState(null)
const [search, setSearch] = useState('');
const [startSearch, setStartSearch] = useState('');
const { user } = useAuthListener();
const primaryButton = true;
const { firebase } = useContext(FirebaseContext)
let photoURL = user.photoURL;
let history = useHistory();
const profilePicture = `/images/users/${photoURL}.png`;

    const logout = () => {
         firebase.auth().signOut()
    }
console.log(search);


    return (
        <Header>
            <Navbar >
                { /*<MediaContent.Video><source src=''/></MediaContent.Video> */}
                <Navbar.LinkWrapper>
                <Navbar.Container>
                        <Navbar.List><Navbar.Link>Home</Navbar.Link></Navbar.List>
                        <Navbar.List><Navbar.Link>TV Shows</Navbar.Link></Navbar.List>
                        <Navbar.List><Navbar.Link>Movies</Navbar.Link></Navbar.List>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.List>
                    <Navbar.SearchIcon 
                    active={startSearch} 
                    src='/images/icons/search.png' 
                    onClick={() => setStartSearch(startSearch => !startSearch)} value={startSearch}
                    />
                    <Navbar.SearchBar
                    active={startSearch} 
                    value={search}
                    placeholder="Titles, People, Genres" onChange={({target}) => setSearch(target.value)}
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
               {/* <MediaContent.Title>Tidelands</MediaContent.Title>
               <MediaContent.Subtitle>Everything....</MediaContent.Subtitle> */}
            </Navbar>
            <Header.DesciptionContainer>
               <Header.Title>Watch Joker Now</Header.Title>
               <Header.Subtitle> Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. </Header.Subtitle>
               <Header.Group>
                    <Header.Button primary={primaryButton}>
                    <Navbar.Icon src='/images/icons/arrow.svg'/>
                    <p>Play</p>
                    </Header.Button>
                    <Header.Button primary={!primaryButton}>
                    <Navbar.Icon src='/images/icons/arrow.svg'/>
                    <p>More Info</p>
                    </Header.Button>
               </Header.Group>
            </Header.DesciptionContainer>
        </Header>
    )
}

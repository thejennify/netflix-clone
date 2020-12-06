import React from 'react';
import { Profiles } from '../components';
import { Navbar } from '../components';
import { useAuthListener } from '../hooks';
import { useHistory } from 'react-router';
import { routes } from '../routes';

export default function ProfilesContainer() {
    const { user } = useAuthListener();
    let photoURL = user.photoURL;
    let history = useHistory();
    const profilePicture = `/images/users/${photoURL}.png`

    function navigatoToContent() {
        history.push(routes.content);
    }

    return (
        <Profiles>
            <Navbar/>
            <Profiles.Frame onClick={navigatoToContent}>
                <Profiles.Title>Who is watching?</Profiles.Title>
                <Profiles.UsersList>
                    <Profiles.User>
                        <Profiles.Picture src={ profilePicture }/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.UsersList>
            </Profiles.Frame>
        </Profiles>
    )
}

import React from 'react';
import { Container, Frame, UsersList, User, Title, Picture, Name} from './styles/profiles';

export default function Profiles({ children, ...props }) {
    return (
        <Container>
            { children }
        </Container>
    )
}
Profiles.Frame = function ProfilesFrame({children, ...props}) {
    return <Frame {...props}>{children}</Frame>
}

Profiles.UsersList = function ProfilesUsersList({children, ...props}) {
    return <UsersList {...props}> {children} </UsersList>
}

Profiles.User = function ProfilesUser({children, ...props}) {
    return <User {...props}> {children} </User>
}

Profiles.Title = function ProfilesTitle({children, ...props}) {
    return <Title {...props}>{children}</Title>
}

Profiles.Picture = function ProfilesPicture({children, ...props}) {
    return <Picture {...props}>{children}</Picture>
}
Profiles.Name = function ProfilesName({children, ...props}) {
    return <Name {...props}>{children}</Name>
}
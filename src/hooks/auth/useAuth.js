import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../context/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    );
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => { // runs once when the user loads the page to check login status 
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                 localStorage.setItem('authUser', JSON.stringify(authUser));
                 setUser(authUser)
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);

    return { user };
}
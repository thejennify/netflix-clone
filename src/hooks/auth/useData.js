import { useEffect, useState, useContext } from 'react';

import { FirebaseContext } from '../../context/firebase';

export default function useData(dataCollection) {
    const { firebase } = useContext(FirebaseContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        firebase.firestore()
        .collection((dataCollection))
        .get()
        .then((contents) => {
            const profileContent = 
            contents.docs.map((content) => ({...content.data(),
                docId: content.id,        
            }));
           setData(profileContent);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }, []);
    
    return { [ dataCollection ]: data }
}
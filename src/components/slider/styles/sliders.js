import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: -150px 3em 0 3em;
    
    @media (max-width: 780px) {
        margin: -5em 1em 0 1em;
        overflow-y: hidden;
    }
`;

export const Category = styled.h2`
    color: #fff;
    text-transform: capitalize;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
   
`;

export const Container = styled.div`
    display: flex;
    width: 100vw;
`;

export const Row = styled.div`
    display: flex;
    padding: 0;
    margin: 0;

`;

export const Modal = styled.div`
    background-color: #151515;
    display: none;
    position: absolute;
    z-index: 999;
    box-shadow: 0px 14px 25px 0px rgba(0, 0, 0, 0.79);
    border-radius: 10px;
    margin-top: -30%;
    padding: 0;

    @media (max-width: 600px) {
        width: 300px;
    }
     
`;

export const ImageModal = styled.img`
    border-radius: 10px 10px 0 0;    
    width: 400px;
    margin: 0;
    padding: 0;

    @media (max-width: 600px) {
        width: 300px;
    }
`;

export const MetaContainer = styled.div`
    color: #fff;
    padding: 1em;
    margin-top: 0;
`;

export const Card = styled.div`
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    padding: 0;
    margin: 0;
    position: relative;

    :hover > ${Modal} {
        display: block;
    }

`;

export const Image = styled.img`
    border-radius: 5px;
    margin-left: 5px;
    height: 150px;
    cursor: pointer;

    @media (max-width: 600px) {
        height: 120px;
    }

`;


export const IconRow = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 3em;
    align-items: center;
`;

//chnage to button!
export const Icon = styled.img`
    width: ${({border}) =>  ( border === 'false'? '2.7em' : '1.2em')};
    padding: ${({border}) =>  ( border === 'false'? '0' : '.7em')};
    color: #fff;
    background-color: ${({border}) =>  ( border === 'false'? '' : 'rgba(211, 211, 211, .099)')};
    border: ${({border}) =>  ( border === 'false'? '0' : '.1em solid #fff')};
    border-radius: 50%;
    margin-right: 1em;
`;

export const MetaRow = styled.div`
    display: flex;
    align-items: center;

`;

export const Metadata = styled.p`
    margin-right: 1em;
    color: ${({rating}) =>  ( rating === 'true'? 'green' : '#fff')};
    border: ${({margin}) =>  ( margin === 'true'? '.5px solid #fff' : '0')};
    padding: ${({margin}) =>  ( margin === 'true'? '.4em' : '0')};
`;

export const Mood = styled.div`

`;


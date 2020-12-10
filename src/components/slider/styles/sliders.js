import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-top: -150px;
    width: 100vw;
    
    @media (max-width: 780px) {
        margin-top: -5rem;
    }
`;

export const Category = styled.h2`
    color: #fff;
    text-transform: capitalize;
    padding-left: 3rem;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
   
`;

export const Container = styled.div`
    display: flex;
    padding: 0rem 3rem;

    @media (max-width: 600px) {
        padding: 0rem 1rem;
    }
`;

export const Row = styled.div`
    max-width: 100vw;

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
        width: 250px;
    }
     
`;

export const ImageModal = styled.img`
    border-radius: 10px 10px 0 0;    
    width: 400px;
    margin: 0;
    padding: 0;

    @media (max-width: 600px) {
        width: 250px;
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
    margin-left: 10px;
    height: 190px;
    cursor: pointer;

    @media (max-width: 600px) {
        height: 100px;
    }

`;


export const IconRow = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: .5em;
`;

export const Icon = styled.button`
    border-radius: 50%;
    margin-right: 1.5em;
    cursor: pointer;
    background-color:${({border}) =>  ( border === 'false'? 'transparent' : 'rgba(215, 211, 211, .09)')}; 
    border:${({border}) =>  ( border === 'false'? 'none' : '.1em solid #fff')}; 
    
    img{
        color: #fff;
        border-radius: 50%;
        margin: 0;
        padding: 0;
        padding: ${({border}) =>  ( border === 'false'? '' : '1em')}; 
        display: block;
        height: ${({border}) =>  ( border === 'false'? '4.2em' : '2em')}; 
        width: ${({border}) =>  ( border === 'false'? '4.2em' : '2em')};
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

export const MetaRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

`;

export const Metadata = styled.p`
    margin-right: 1em;
    color: ${({rating}) =>  ( rating === 'true'? '#46d369' : '#fff')};
    border: ${({margin}) =>  ( margin === 'true'? '.1em solid #fff' : '0')};
    padding: ${({margin}) =>  ( margin === 'true'? '0em .4em' : '0')};
    font-weight: ${({rating}) =>  ( rating === 'true'? '600' : '400')};


    @media (max-width: 600px) {
       font-size: 13px;
    }
`;

export const Mood = styled.div`

`;


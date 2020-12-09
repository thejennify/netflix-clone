import styled from 'styled-components';

export const Background = styled.section`
    background-image: ${({hide}) => (hide ? '' : 'url(/images/misc/banner.jpg)')};
    height: ${({hide}) => (hide ? '40vh' : '100%')};
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    width: 100%;
    box-shadow: 0px 0px 100px 0px #000;
    @media (max-width: 600px) {
        height: 35vh;
    }

`;
export const Overlay = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.7833508403361344) 0%, rgba(0,0,0,0.19791666666666663) 100%);

    @media (max-width: 600px) {
        height: 35vh;
    }
`;

export const DescriptionContainer = styled.div`
    display: ${({hide}) => (hide ? 'none' : 'block')};
    padding: 0em 2em 15em 3em; 
    max-width: 40%;
    @media (max-width: 600px) {
        max-width: 50vw;
        padding: 1em ;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-wrap: no-wrap;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 15rem;
    font-weight: 500;
    @media (max-width: 600px) {
        font-size: 20px;
        margin-bottom: 1em;
    }
`;

export const Subtitle = styled.p`
    margin-top: 0;
    color: #fff;
    font-size: 1.15em;
    line-height: 1.5em;
    margin-bottom: 1em;
    font-weight: 400;
    margin-bottom: 2em;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Button = styled.button`
    background-color: ${({primary}) =>  ( primary ? '#fff' : 'rgba(102, 102, 102, .9)')};
    color: ${({primary}) =>  ( primary ? '#222' : '#fff')};
    padding: .5em 1.5em;
    border: none;
    justify-content: space-between;
    display: flex;
    flex-wrap: no-wrap;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 700;
    margin-right: 2em;
     img{
         width: 1.8em;
         margin-right: .5em;
     }
     @media (max-width: 600px) {
        font-size: .5em;

    }
`;

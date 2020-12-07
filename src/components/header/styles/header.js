import styled from 'styled-components';

export const Background = styled.section`
    background-image: url(/images/misc/joker1.jpg);
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    box-shadow: 0px 0px 100px 0px #000;
    @media (max-width: 600px) {
        height: 20vh;
    }

`;

export const DescriptionContainer = styled.div`
    padding: 3em;
    max-width: 50vw;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const Group = styled.div`
    display: flex;
`;

export const Title = styled.h1`
color: #fff;
font-size: 34px;
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 20px;
    line-height: 1.5em;
`;

export const Button = styled.button`
    background-color: ${({primary}) =>  ( primary ? '#fff' : '#c4c4c4')};
    color: #222;
    padding: 1em;
    border: none;
    justify-content: space-between;
    height: 40px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin-right: 2em;
`;

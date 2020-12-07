import styled from 'styled-components/macro';

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    padding: 70px 45px;
    max-width: 815px;
    margin: auto;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 70px 5%;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Text = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Link = styled.a`
    color: #757575; 
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
    text-transform: capitalize;
`;

export const Break = styled.p`
    flex-basis: 100%
    height: 0;
`;


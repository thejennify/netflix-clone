import styled from 'styled-components';

export const Container = styled.section`
    background-color: #151515;
    height: 100vh;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;

`;

export const UsersList = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
    flex-wrap: wrap;

`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    :hover {
        img{
            border: 3px solid #fff;
        }
        p{
            color: #fff;   
        }
    }
`;

export const Title = styled.div`
    color: #fff;
    font-size: 50px;
    @media (max-width: 600px) {
        font-size: 26px;  
    }
`;

export const Picture = styled.img`
    border-radius: 10px;
    border: 3px solid #151515;
    box-sizing: border-box;
    width: 150px;
`;

export const Name = styled.p`
    color: #808080;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    :hover {
        color: #fff;
    }
`;

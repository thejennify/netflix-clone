import styled from 'styled-components/macro';

export const Main = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-betwen;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Main}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 1000px) {
        font-size: 35px;
        text-align: center;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 1000px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin: auto;
    display: block;
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;




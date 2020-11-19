import styled from 'styled-components/macro';

export const Background = styled.div`
    background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/c59b9f2f-08e2-4030-818f-a5d153cc855c/CA-en-20201019-popsignuptwoweeks-perspective_alpha_website_large.jpg');
    height: 100%;
    border-bottom: 8px solid #222;

`;
export const Overlay = styled.div`
    background-color: rgba(0,0,0, .6);
    height: 100%;
`;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        width: 8em;
        @media (max-width: 500px) {
            width: 6em;
        }
    }
`;

export const Inner = styled.div`
  display: flex;
  padding: 8em 1em;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
  @media (max-width: 500px) {
    padding: 5em 1em;
}
`;

export const Container = styled.div`
    padding: 2em 3em;
    
    @media (max-width: 500px) {
        padding: 2em;
    }
`;

export const Button = styled.button`
background-image: linear-gradient(to bottom, #e50914, #db0510);
box-shadow: 0 1px 0 rbga(0,0,0,.45);
cursor: pointer;
latter-spacing: .1px;
text-align: center;
text-transform: capitalize;
border: none;
font-size: 1em;
color: #fff;
padding: .5em 1em;
border-radius: .2em;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 3.12rem;
    text-align: center;
    max-width: 640px;
    margin: auto;

    @media (max-width: 500px) {
        font-size: 1.7em;
    }

`;
export const SubTitle = styled.h2`
font-size: 26px;
color: #fff;
text-align: center;
font-weight: 400;
@media (max-width: 500px) {
    font-size: 18px;
}
`;

export const Paragraph = styled.p`
    color: #fff;
    font-size: 18px;
    text-align: center; 
    margin-top: 1.5em;
    
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

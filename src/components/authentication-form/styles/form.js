import styled from 'styled-components/macro';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    @media (min-width: 1000px) {
        background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/c59b9f2f-08e2-4030-818f-a5d153cc855c/CA-en-20201019-popsignuptwoweeks-perspective_alpha_website_large.jpg');
        backgorund-size: cover;
        backgorund-repeat: no-repeat;
        display: flex;
        align-item: center;
        flex-direction: column;
      }
`;

export const Overlay = styled.div`
    background-color: rgba(0,0,0, .6);
    height: 100%;
`;

export const Inner = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: column;
  margin: auto;
  @media (max-width: 500px) {
    padding: 5em 1em;
}
`;

export const Container = styled.div`
    width: 350px;
    background-color: rgba(0,0,0, .80);
    padding: 60px 68px 40px;
    margin: auto;
    color: #737373;

    @media (max-width: 700px) {
        padding: 1em;
        width: auto;
        backgorund-color: #222;
        padding: 1em;
        height: auto;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #fff;
`;

export const Form = styled.form`
    width: 100%;

`;
export const Input = styled.input.attrs( props => ({
    borderBottom: props.borderBottom,
    marginBottom: props.marginBottom,

}))`
    background-color: #353535;
    padding: 0 1em; 
    height: 48px;
    border: none;
    width: 100%;
    outline: none;
    border: none;
    font-size: 1em;
    box-sizing: border-box;
    margin-bottom: ${props => props.marginBottom};
    border-radius: 5px;
    border-bottom: ${props => props.borderBottom};
    color: #fff; 
`;

export const Button = styled.button`
background-image: linear-gradient(to bottom, #e50914, #db0510);
box-shadow: 0 1px 0 rbga(0,0,0,.45);
cursor: pointer;
latter-spacing: .1px;
text-align: center;
text-transform: capitalize;
border: none;
height: 48px;
color: #fff;
padding: .5em;
margin: auto;
margin-top: .5em;
width: 100%;
outline: none;
border-radius: 5px;
font-size: 1em;
font-weight: 700;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Paragraph = styled.p``;

export const Link = styled.a.attrs( props => ({
    color:  props.color,
    fontSize: props.fontSize,
    textDecoration: props.textDecoration,

}))`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-decoration: ${props => props.textDecoration};
`;

export const ErrorMessage = styled.div`
    background-color: #e87c03;
    color: white;
    padding: 1em;
    border-radius: 5px;
    margin-bottom: 1em;
`;

export const ErrorText = styled.p`
    color: #e87c03;
    font-size: 13px;
`;
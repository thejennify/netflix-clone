import styled from 'styled-components/macro';

export const Title = styled.h3`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 1.5em;
  color: white;
  text-align: center;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  margin: auto;
  max-width: 670px;
  width: 100%;
  margin-bottom: .5em;
  &:first-of-type {
    margin-top: 3em;
  }
`;


export const Input = styled.input.attrs( props => ({
    type: "text",
    placeholder: "Email address",
}))`
    background-color: #fff;
    padding: 0 1em; 
    height: 60px;
    border: none;
    width: 100%;
    outline: none;
    border: 1px solid blue;
    font-size: 1em;
    box-sizing: border-box;


    @media (max-width: 600px) {
        margin-bottom: 1em;
        width: 100%;
        height: 48px;
    }
    
`;
 
export const Form = styled.form`
    align-items: center;
    margin: 0;
    padding: 0;
    display: flex;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        flex-direction: column;
    }

`;

export const Button = styled.button`
    background-image: linear-gradient(to bottom, #e50914, #db0510);
    box-shadow: 0 1px 0 rbga(0,0,0,.45);
    cursor: pointer;
    latter-spacing: .1px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    min-height: 60px;
    color: #fff;
    padding: .5em;
    margin: auto;
    width: 100%;
    outline: none;
    font-size: 1.6em;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-image: #f40612;
    }


    img {
      filter: brightness(0) invert(1);
      width: 12px;
      @media (max-width: 600px) {
        width: 12px;
        }
      }
      @media (max-width: 600px) {
        font-size: 16px;
        width: auto;
        min-height: 40px;
        border-radius: 2px;
      }
`;
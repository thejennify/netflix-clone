import styled from 'styled-components';

export const Wrapper = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1em 3em;

    @media (max-width: 600px) {
        padding: 1em;
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

export const Logo = styled.img`
    float: left;
    width: 7em;
    @media (max-width: 600px) {
        width: 3.5em;
    }
;`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    @media (max-width: 600px) {
        justify-content: flex-end;
    }

`;

export const SearchBar = styled.input`
   border: none;
   background-color: transparent;
   width: 100%;
   padding: 0;
   margin: 0;
   outline: none;
   color: #fff;

`;
export const SearchBarContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .9);
    border: 1.5px solid #fff;
    color: #fff;
    padding: 0 .5em;
    height: 32px;
    display: ${({active}) => (active ? 'visible' : 'none')};
    opacity: ${({active}) => (active ? '1' : '0')};
    width: ${({active}) => (active ? '250px' : '0px')};
    transition: ${({active}) =>  (active ? '1s' : '')};
    animation: ${({active}) =>  (active ? 'slidein' : '')};

    @keyframes slidein {
        from {
            margin-left: 0%;
            width: 100%;
        }

        to {
            margin-left: 100%;
            width: 300%;
        }
    }
`;

export const SearchIcon = styled.button`
    color: #fff;
    width: 25px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    display: ${({hide}) => (hide ? 'none' : 'visible')};

    :hover > ${SearchBar} {
        display: block;
    }
`;

export const Select = styled.a`
    color: #fff;
    display: flex;
    cursor: pointer;
    align-items: center;
    img{
        width: 2em;
        border-radius: .1em;
        margin-right: 1em;
    }
`;

export const Dropdown = styled.aside`
    background-color: rgba(0, 0, 0, .9);
    padding: 1.5em;
    color: #fff;
    font-size: 12px;
    width: 150px;
    margin-top: 10rem;
    right: 1.5rem;
    position: absolute;
    line-height: 2.5em;
    display: none;
    cursor: pointer;
    display: ${({modal}) =>  ( modal ? 'flex' : 'none')};
    flex-direction: column;

`;

export const DropdownIcon = styled.button`  
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border:  none;

    img{
        width: 2em;
    }
    
`;

export const Icon = styled.img`
    color: #fff;
    width: 18px;
    cursor: pointer;
`;

export const ProfilePicture = styled.img`
    width: 2em;
    border-radius: 4px;
    cursor: pointer;
  
`;

export const Container = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 850px) {
        display: ${({display}) => (display === 'none'? 'none' : 'visible')}
    }

`;

export const LinkModal = styled.div`
    display: flex;
    align-items: center;
    position relative;

`;

export const List = styled.li`
    color: #fff;
    display: inline;
    text-align: center;
    margin-left: 1em;

`;

export const Link = styled.a`
    text-decoration: none;
    font-weight: ${({active}) =>  ( active ? '500' : '400')};
    cursor: pointer;
    font-size: 14px;
    :hover {
        color: #dbdbdb;
    }
    
`;
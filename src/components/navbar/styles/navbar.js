import styled from 'styled-components';

export const Wrapper = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1em 3em;

    @media (max-width: 600px) {
        padding: .5em;
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
        width: 5em;
    }
;`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const SearchBar = styled.input`
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .9);
    border: 1.5px solid #fff;
    color: #fff;
    padding: 0 .5em;
    height: 32px;
    opacity: ${({active}) => (active ? '1' : '0')};
    width: ${({active}) => (active ? '250px' : '0px')};
    transition: ${({active}) =>  (active ? '.5s' : '0')};
    animation: ${({active}) =>  (active ? 'slidein' : '')};

    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 300%
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }

`;

export const SearchIcon = styled.img`
    color: #fff;
    width: 25px;
    margin-left: ${({active}) =>  (active ? '-10px' : '10px')};
    :hover > ${SearchBar} {
        display: block;
    }
`;

export const Select = styled.a`
    color: #fff;
    display: flex;
    justify-content: column;
    &:hover {
        color: ##808080;
    }
`;

export const Dropdown = styled.div`
    background-color: rgba(0, 0, 0, .9);
    padding: 1em;
    color: #fff;
    font-size: 12px;
    width: 150px;
    margin-top: 15em;
    right: 1em;
    position: absolute;
    line-height: 2.5em;
    display: none;

`;

export const DropdownIcon = styled.img`
    transform: rotate(90deg);
    color: #fff;
    width: 18px;
`;

export const Icon = styled.img`
    color: #fff;
    width: 18px;
`;

export const ProfilePicture = styled.img`
    width: 2em;
    border-radius: 4px;

`;

export const Container = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        display: none;
    }

`;

export const LinkModal = styled.div`
    display: flex;
    align-items: center;
    position relative;

    :hover > ${Dropdown} {
        display flex;
        flex-direction: column;
        cursor: pointer;
    }
`;

export const List = styled.li`
    color: #fff;
    display: inline;
    margin-left: 1em;

`;

export const Link = styled.a`
    text-decoration: none;
    font-weight: ${({active}) =>  ( active ? '600' : '400')};
    
    :hover {
        color: #808080;
    }
    
`;
import React from 'react';

import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';
import { faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stopki from '../../images/stopki.png';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #232629;
    color: #b8c2bb;
    width: 100%;
    margin-top: 3em;
    @media (max-width: 991.98px){
        flex-direction: column;
    }
`;

const StyledDiv = styled.div`
    width: 25% !important;
    padding: 2em !important;
    display: flex !important;
    height: 100%;
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
    ${props => props.social && css`
        flex-direction: row;
        margin-top: 1em;
    `};
    ${props => props.menu && css`
        font-weight: 600;
    `};
    @media (max-width: 991.98px){
        width: 80% !important;
    }
`;
export const StyledNavLink = styled(NavLink)`
&.${props => props.activeClassName}{
    border-bottom: 2px solid #D41e83;
}
        display:block;
         text-decoration: none;
         color: inherit;
         padding: 0.5em;
         cursor: pointer;
         transition: 0.3s ease;
         &:hover{
            transform: scale(1.02);
            color: #D41e83;
         }
`;
const StyledLink = styled.a`
         text-decoration: none;
         color: #D41e83;
         ${props => props.icon && css`
            color: inherit;
         `};
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
         font-size: 2em;
         cursor: pointer;
         transition: 0.3s ease;
         ${props => props.facebook && css`
         &:hover{
            color: #1877f2;
        }
         `};
         ${props => props.instagram && css`
         &:hover{
             color: #D41e83;
         }
         `}
`;
const StyledH3 = styled.h3`
         color: white;
         top:0;
`;
const StyledImg = styled.img`
         width: 20% !important;
         @media (max-width: 991.98px){
             width: 10% !important;
         }
`

class Footer extends React.Component{
    render(){
        return(
            <StyledFooter>
                <StyledDiv>
                    <StyledImg src={stopki} alt="logo"></StyledImg>
                    <h1>Wioleta Dzięgelewska</h1>
                </StyledDiv>
                <StyledDiv>
                    <StyledH3>Social Media</StyledH3>
                    <StyledLink icon target="blank" href="https://pl-pl.facebook.com/GabinetPodologicznyPasja/"><StyledFontAwesome facebook icon={faFacebookSquare}></StyledFontAwesome></StyledLink>
                    <StyledLink icon target="blank" href="https://pl-pl.facebook.com/GabinetPodologicznyPasja/"><StyledFontAwesome instagram icon={faInstagram}></StyledFontAwesome></StyledLink>
                </StyledDiv>
                <StyledDiv menu>
                            <StyledH3>Menu</StyledH3>
                            <StyledNavLink to="/dashboard" activeClassName="anyClass">Strona główna</StyledNavLink>
                            <StyledNavLink to="/prices" activeClassName="anyClass">Cennik</StyledNavLink>
                            <StyledNavLink to="/contact" activeClassName="anyClass">Kontakt</StyledNavLink>
                            <StyledNavLink to="/about" activeClassName="anyClass">O mnie</StyledNavLink>
                            <StyledNavLink to="/portfolio" activeClassName="anyClass">Portfolio</StyledNavLink>
                            <StyledNavLink to="/disease" activeClassName="anyClass">Najczęstsze schorzenia</StyledNavLink>
                </StyledDiv>
            </StyledFooter>
        );
    }
}

export default Footer;
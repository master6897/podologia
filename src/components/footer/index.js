import React from 'react';

import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';
import { faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stopki from '../../images/rds_logo_white_2.png';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    background-color: #232629;
    color: #b8c2bb;
    width: 100%;
    margin-top: 3em;
    @media (max-width: 991.98px){
        flex-direction: column;
        padding: 2em 0;
        align-items: center;
    }
`;

const StyledDiv = styled.div`
    width: 25% !important;
    padding: 2em;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
    ${props => props.social && css`
        height: 100%;
        margin-top: 1em;
    `};
    ${props => props.menu && css`
        font-weight: 600;
    `};
    @media (max-width: 991.98px){
        width: 80% !important;
        padding: 0;
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
            color: white;
         }
`;
const StyledLink = styled.a`
         text-decoration: none;
         color: #D41e83;
         ${props => props.icon && css`
            color: inherit;
            margin-bottom: 1rem;
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
         width: 60% !important;
         @media (max-width: 991.98px){
             width: 60% !important;
         }
`

class Footer extends React.Component{
    render(){
        return(
            <StyledFooter>
                <StyledDiv>
                    <StyledImg src={stopki} width="20%" alt="logo"></StyledImg>
                </StyledDiv>
                <StyledDiv social>
                    <StyledH3>Social Media</StyledH3>
                    <StyledLink icon target="blank" href="https://pl-pl.facebook.com/GabinetPodologicznyPasja/"><StyledFontAwesome facebook icon={faFacebookSquare}></StyledFontAwesome></StyledLink>
                    <StyledLink icon target="blank" href="https://pl-pl.facebook.com/GabinetPodologicznyPasja/"><StyledFontAwesome instagram icon={faInstagram}></StyledFontAwesome></StyledLink>
                </StyledDiv>
                <StyledDiv menu>
                            <StyledH3>Menu</StyledH3>
                            <StyledNavLink to="/dashboard" activeClassName="anyClass">Strona g????wna</StyledNavLink>
                            <StyledNavLink to="/prices" activeClassName="anyClass">Cennik</StyledNavLink>
                            <StyledNavLink to="/contact" activeClassName="anyClass">Kontakt</StyledNavLink>
                            <StyledNavLink to="/about" activeClassName="anyClass">O mnie</StyledNavLink>
                            <StyledNavLink to="/portfolio" activeClassName="anyClass">Portfolio</StyledNavLink>
                            <StyledNavLink to="/disease" activeClassName="anyClass">Najcz??stsze schorzenia</StyledNavLink>
                </StyledDiv>
            </StyledFooter>
        );
    }
}

export default Footer;
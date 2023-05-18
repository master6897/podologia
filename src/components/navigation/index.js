import React from 'react';

import styled, {css, keyframes} from 'styled-components';
import { NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Burger from './burger';
import MobileMenu from './mobileMenu';

const HeaderAnimation = keyframes`
    from{
        height: 8vh;
    }
    to{
        height: 5vh;
        background-color:#d577b5;
    }
`;
const HeaderSecondAnimation = keyframes`
    from{
        height: 5vh;
    }
    to{
        height: 8vh;
        background: trasparent;
    }
`;
const Nav = styled.nav`
        display:flex;
        align-items:center;
        justify-content:space-around;
        height: 15vh;
        width: 100%;
        position: fixed;
        top:0;
        left:0;
        color: white;
        font-weight: 600;
        z-index: 1000;
        box-sizing: border-box;
        ${props => props.scrolled ? css`
            animation: ${HeaderAnimation} .5s forwards;
        ` : css`
            animation: ${HeaderSecondAnimation} .5s forwards;
        `}
        ${props => props.home === true ? css`
            background: transparent;
        ` : css`
            background-color:#d577b5;
        `}
    `;
const LogoContainer = styled.div`
        display:flex;
        width:30%;
        color:inherit;
        @media (max-width: 991.98px){
            width: 90%;
            justify-content: center;
            align-items: center;
        }
`;
const LinksContainer = styled.div`
        display:flex;
        width:63%;
        align-items:center;
        justify-content:space-around;
        padding:0 1em;
        @media (max-width: 991.98px){
            display: none;
        }
`;
const StyledLogo = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 0 1em;
        width:100%;
        height: 100%;
        color: inherit;
        & p{
            font-size: .7rem;
        }
        & h1{
            margin: 0;
            font-family: 'Style Script', cursive;
            letter-spacing: 5px;
        }
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
            color: #493657;
         }
         &${props => props.mobile && css`
            width: 80%;
            font-size: 1.5rem;
            text-align: center;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: #EFFFFA;         
         `}
`;

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled: this.props.scrolled,
            open: false
        };
        this.openBurger = this.openBurger.bind(this);
    }

    openBurger(){
        this.setState({open: !this.state.open});
    }
    render(){
        const {location} = this.props;
        return(
            <>
                {this.props.scrolled === true ? 
                    <Nav scrolled home={location.pathname === '/dashboard' ? true : false}>
                        <LogoContainer>
                            <Burger open={this.state.open} onClick={this.openBurger}></Burger>
                            <StyledLogo scrolled>
                                {/*<img src={stopki} alt="logo"></img>*/}
                                <h1>Raj dla Stóp</h1>
                            </StyledLogo>
                            <MobileMenu open={this.state.open}>
                                    <StyledNavLink mobile to="/dashboard" activeClassName="anyClass" onClick={this.openBurger}>Strona główna</StyledNavLink>
                                    <StyledNavLink mobile to="/prices" activeClassName="anyClass" onClick={this.openBurger}>Cennik</StyledNavLink>
                                    <StyledNavLink mobile to="/contact" activeClassName="anyClass" onClick={this.openBurger}>Kontakt</StyledNavLink>
                                    <StyledNavLink mobile to="/about" activeClassName="anyClass" onClick={this.openBurger}>O mnie</StyledNavLink>
                                    <StyledNavLink mobile to="/portfolio" activeClassName="anyClass" onClick={this.openBurger}>Portfolio</StyledNavLink>
                                    <StyledNavLink mobile to="/disease" activeClassName="anyClass" onClick={this.openBurger}>Najczęstsze schorzenia</StyledNavLink>
                            </MobileMenu>
                        </LogoContainer>
                        <LinksContainer>
                            <StyledNavLink to="/dashboard" activeClassName="anyClass">Strona główna</StyledNavLink>
                            <StyledNavLink to="/prices" activeClassName="anyClass">Cennik</StyledNavLink>
                            <StyledNavLink to="/contact" activeClassName="anyClass">Kontakt</StyledNavLink>
                            <StyledNavLink to="/about" activeClassName="anyClass">O mnie</StyledNavLink>
                            <StyledNavLink to="/portfolio" activeClassName="anyClass">Portfolio</StyledNavLink>
                            <StyledNavLink to="/disease" activeClassName="anyClass">Najczęstsze schorzenia</StyledNavLink>
                        </LinksContainer>
                    </Nav>
                     : 
                    <Nav home={location.pathname === '/dashboard' ? true : false}>
                        <LogoContainer>
                            <Burger open={this.state.open} onClick={this.openBurger}></Burger>
                            <StyledLogo>
                                 {/*<img src={stopki} alt="logo"></img>*/}
                                 <h1>Raj dla Stóp</h1>
                                 <p>Podolog - Wioleta Puc</p>
                            </StyledLogo>
                            <MobileMenu open={this.state.open}>
                            <StyledNavLink mobile to="/dashboard" activeClassName="anyClass" onClick={this.openBurger}>Strona główna</StyledNavLink>
                                    <StyledNavLink mobile to="/prices" activeClassName="anyClass" onClick={this.openBurger}>Cennik</StyledNavLink>
                                    <StyledNavLink mobile to="/contact" activeClassName="anyClass" onClick={this.openBurger}>Kontakt</StyledNavLink>
                                    <StyledNavLink mobile to="/about" activeClassName="anyClass" onClick={this.openBurger}>O mnie</StyledNavLink>
                                    <StyledNavLink mobile to="/portfolio" activeClassName="anyClass" onClick={this.openBurger}>Portfolio</StyledNavLink>
                                    <StyledNavLink mobile to="/disease" activeClassName="anyClass" onClick={this.openBurger}>Najczęstsze schorzenia</StyledNavLink>
                            </MobileMenu>
                        </LogoContainer>
                        <LinksContainer>
                            <StyledNavLink to="/dashboard" activeClassName="anyClass">Strona główna</StyledNavLink>
                            <StyledNavLink to="/prices" activeClassName="anyClass">Cennik</StyledNavLink>
                            <StyledNavLink to="/contact" activeClassName="anyClass">Kontakt</StyledNavLink>
                            <StyledNavLink to="/about" activeClassName="anyClass">O mnie</StyledNavLink>
                            <StyledNavLink to="/portfolio" activeClassName="anyClass">Portfolio</StyledNavLink>
                            <StyledNavLink to="/disease" activeClassName="anyClass">Najczęstsze schorzenia</StyledNavLink>
                        </LinksContainer>
                    </Nav>}
            </>
        );
    }
}

export default withRouter(Navigation);
import React from 'react';

import styled, {css} from 'styled-components';
import Map from '../../shared/googleMap';
import ContactUs from '../../shared/form';

const StyledSection = styled.section`
    display: flex;
    padding: 2em;
    margin-top: 15vh;
    @media (max-width: 991.98px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const StyledDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    ${props => props.social && css`
        flex-direction: row;
        margin-top: 1em;
    `};
    ${props => props.menu && css`
        font-weight: 600;
    `};
    @media (max-width: 991.98px){
        width: 90%;
    }
`;
const StyledLink = styled.a`
         text-decoration: none;
         color: #D41e83;
         ${props => props.icon && css`
            color: inherit;
         `};
`;

class ContactPage extends React.Component{
    render(){
        return(
            <StyledSection>
                <StyledDiv>
                    <h1>Wioleta Puc</h1>
                    <h2>Willowa 8, 71-650 Szczecin</h2>
                    <h2>Kontakt telefoniczny: <StyledLink href="tel:509534864">509 534 864</StyledLink></h2>
                    <Map></Map>
                    </StyledDiv>
                <StyledDiv>
                    <ContactUs/>
                </StyledDiv>
            </StyledSection>
        );
    }
}

export default ContactPage;
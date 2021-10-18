import React from 'react';

import styled, {css} from 'styled-components';
import Button from '../../button';
import Noga from '../../../images/Noga.png';

const Container = styled.section`
    padding-top: 15vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    ${props => props.svg && css`
        padding: 0;
        margin: 0;
        width: 100%;
    `}
`;
const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color:#000b76;
    @media (max-width: 991.98px){
        flex-direction: column;
    }
`;
const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 0 1em;
    @media (max-width: 991.98px){
        width: 70%;
        padding: 0;
    }
    ${props => props.picture && css`
        width: 40%;
    `};
    ${props => props.margin && css`
        margin-bottom: 2em;    
    `}
`;
const StyledH1 = styled.h1`
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: .5rem;
    text-align: left;
    font-family:
`;
const StyledParagraph = styled.p`
    color:#b8c2bb;
    text-align: left;
    margin-top: 2em;
`;
const StyledLink = styled.a`
    text-decoration: none;
    color: #D41e83;
`;
const StyledImg = styled.img`
    width: 100%;
`;

class FrontPage extends React.Component{
    render(){
        return(
            <Container>
                <StyledSection>
                    <StyledArticle margin>
                        <StyledH1>Zadbaj ze mną o zdrowie swoich stóp!</StyledH1>
                        <StyledParagraph>Regularne wizyty w gabinecie podologicznym zmniejszają ryzyko poważnych dolegliwości</StyledParagraph>
                        <Button name="Umów wizytę!" link="/contact"></Button>
                    </StyledArticle>
                    <StyledArticle picture>
                        <StyledImg src={Noga} alt="noga"></StyledImg>
                        <StyledLink href='https://www.freepik.com/vectors/woman'>Woman vector created by pch.vector - www.freepik.com</StyledLink>
                    </StyledArticle>
                </StyledSection>
                <Container svg>
                    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,96L30,85.3C60,75,120,53,180,53.3C240,53,300,75,360,85.3C420,96,480,96,540,106.7C600,117,660,139,720,133.3C780,128,840,96,900,74.7C960,53,1020,43,1080,53.3C1140,64,1200,96,1260,106.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                </Container>
            </Container>
        );
    }
}

export default FrontPage;
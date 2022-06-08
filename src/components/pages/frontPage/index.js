import React from 'react';

import styled, {css} from 'styled-components';
import Button from '../../button';
import gabinetVideoOgg from '../../../videos/gabinetOgm.ogg';
import gabinetVideoMov from '../../../videos/gabinet_mov.mov';

const Container = styled.section`
    display:flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items:center !important;
    width: 100% !important;
    height: 100vh !important;
    overflow: hidden;
    ${props => props.svg && css`
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        display: block !important;
        & > svg{
            width:100% !important;
            @media (max-width: 991.98px){
                overflow:hidden !important;
            }
        }
    `}
`;

const StyledVideo = styled.video`
        min-height: 100% !important;
        min-width: 100% !important;
        object-fit: fill !important;
`;
const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100% !important;
    height: 100vh !important;
    position: absolute;
    background: rgba(0,0,0,0.5);
    @media (max-width: 991.98px){
        flex-direction: column;
    }
`;
const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 40%;
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

const FrontPage = () => {
        return(
            <Container>
                <StyledVideo 
                muted 
                autoPlay 
                playsInline
                loop>
                    <source src={gabinetVideoMov} type='video/mp4'/>
                    <source src={gabinetVideoOgg} type='video/ogg'/>
                    
                </StyledVideo>
                <StyledSection>
                    <StyledArticle margin>
                        <StyledH1>Zadbaj ze mną o zdrowie swoich stóp!</StyledH1>
                        <StyledParagraph>Regularne wizyty w gabinecie podologicznym zmniejszają ryzyko poważnych dolegliwości</StyledParagraph>
                        <Button name="Umów wizytę!" link="/contact"></Button>
                    </StyledArticle>
                </StyledSection>
            </Container>
        );
}

export default FrontPage;
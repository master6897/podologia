import React from 'react';

import styled, {css} from 'styled-components';

const StyledContainer = styled.section`
    display: flex;
    align-items:center;
    justify-content: space-around;
    box-shadow: 0 40px 40px rgb(0 0 0 / 16%);
    width: 90%;
    padding: 2em;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }
    @media (max-width: 991.98px){
        flex-direction: column;
    }
`;

const StyledArticle = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    @media (max-width: 991.98px){
        width: 90%;
    }
`;
const StyledTitle = styled.h1`
    font-family: Georgia, Serif;
    font-size: 1.3em;
`;

const StyledParagraph = styled.p`
    text-align: justify;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #D41e83;
`;
const StyledImg = styled.img`
    width: 100%;
    ${props => props.about && css`
        width: 70%;
    `}
`;

class Container extends React.Component{
    render(){
        return( 
            <StyledContainer>
                <StyledArticle>
                    {this.props.about? 
                        <StyledImg about src={this.props.img} alt={this.props.alt}></StyledImg>
                        :
                        <StyledImg src={this.props.img} alt={this.props.alt}></StyledImg>
                }
                    <StyledLink href={this.props.link}> {this.props.description}</StyledLink>
                </StyledArticle>
                <StyledArticle>
                    <StyledTitle>{this.props.title}</StyledTitle>
                    <StyledParagraph>{this.props.children}</StyledParagraph>
                </StyledArticle>
            </StyledContainer>
        );
    }
}

export default Container;
import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.section`
    display: flex;
    align-items:center;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: 0 40px 40px rgb(0 0 0 / 16%);
    width: 24%;
    padding: 2em;
    height: 30vh;
    overflow: scroll;
    overflow-y: hidden;
    overflow-x: hidden;
    margin: 2em 0;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }
    @media (max-width: 991.98px){
        flex-direction: column;
        width: 70%;
        height: auto;
    }
`;

const StyledArticle = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;
const StyledTitle = styled.h1`
    font-family: Georgia, Serif;
    font-size: 1.3em;
    border-bottom: 2px solid #D41e83;
`;

const StyledUl = styled.ul`
    text-align: left;
`;


class Card extends React.Component{
    render(){
        return(
            <StyledContainer>
                <StyledArticle>
                    <StyledTitle>{this.props.title}</StyledTitle>
                    <StyledUl>{this.props.children}</StyledUl>
                </StyledArticle>
            </StyledContainer>
        );
    }
}

export default Card;
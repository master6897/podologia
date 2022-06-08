import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.fieldset`
    display: flex;
    align-items:center;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: 0 40px 40px rgb(0 0 0 / 16%);
    width: 50%;
    padding: 2em;
    margin: 2em 0;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }
    ::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 991.98px){
        flex-direction: column;
        width: 70%;
        height: auto;
    }
    & legend{
        font-size: 2rem;
        font-weight: 600;
        text-align: left;
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
`;


class Card extends React.Component{
    render(){
        return(
            <StyledContainer>
                <legend>Cennik</legend>
                <StyledArticle>
                    <StyledTitle>{this.props.title}</StyledTitle>
                    {this.props.children}
                </StyledArticle>
            </StyledContainer>
        );
    }
}

export default Card;
import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

const StyledButton = styled.a`
    background: #D41e83;
	border-radius:28px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:1.1rem;
    margin-top:1em;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    width: 30%;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
    @media (max-width: 991.98px){
        width: 80%;
    }
`;
class Button extends React.Component{
    render(){
        const {history} = this.props;
        return(
            <StyledButton onClick={(evt) => {
                evt.preventDefault();
                history.push(this.props.link);
            }}>{this.props.name}</StyledButton>
        );
    }
}

export default withRouter(Button);
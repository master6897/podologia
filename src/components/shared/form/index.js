import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    width:50%;
    text-align:center;
    background-color: inherit;
    border:1px solid #D41e83;
    border-radius: 20px;
    font-size: 1.2em;
    padding:0.5em;
    margin: 1em 0;
    transition: 0.3s ease;
    @media (max-width: 991.98px){
        width: 80%;
    }
    &:focus{
        transform: scale(1.05);
        border: 1px solid #000b76;
        outline: none;
    }
`;
const StyledTextarea = styled.textarea`
    box-sizing: border-box;
    width:50%;
    background-color: inherit;
    border:1px solid #D41e83;
    border-radius: 20px;
    font-size: 1.4em;
    padding:0.5em;
    margin: 1em 0;
    transition: 0.3s ease;
    @media (max-width: 991.98px){
        width: 80%;
    }
    &:focus{
        transform: scale(1.05);
        border: 1px solid #000b76;
        outline: none;
    }
`;

const Input = styled.input.attrs({ 
    type: 'submit',
    value: 'Wyślij'
  })`
  background-color:#D41e83;
  border-radius:28px;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  margin-top:1em;
  padding:16px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
  width: 30%;
  outline: none;
  transition: 0.3s ease;
  border:none;
  &:hover{
      transform: scale(1.05);
  }
  @media (max-width: 991.98px){
      width: 80%;
  }
  `
export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_aq90clw', 'template_wf6h8ns', form.current, 'user_nBAH8zrihrAXD3dS6w79F')
        .then((result) => {
            console.log(result.text);
            document.getElementById("form").reset()
        }, (error) => {
            console.log(error.text);
        });
    };
        return(
            <StyledForm ref={form} onSubmit={sendEmail} id='form'>
                <h1>Kontakt E-mail</h1>
                <StyledInput type="text" placeholder="Imię" name="user_name"></StyledInput>
                <StyledInput type="text" placeholder="Nazwisko" name="user_surname"></StyledInput>
                <StyledInput type="email" placeholder="Email" name="user_email"></StyledInput>
                <StyledTextarea rows="10" cols="50" placeholder="Wiadomość" name="message"></StyledTextarea>
                <Input/>
            </StyledForm>
        );
    }

    export default ContactUs;
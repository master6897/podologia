import React from 'react';

import Card from '../../shared/Card';
import Container from '../../shared/Container';
import styled, {css} from 'styled-components';
import bath from '../../../images/bath.png';


const StyledContainer = styled.section`
    padding-top: 15vh;
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:center;
    width: 100%;
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    & span.descr{
        width: 70%;
        text-align: left;
    }
    & span.price{
        width: 30%;
        text-align: right;
        font-weight: 500;
    }
    ${props => props.break && css`
        padding-bottom: 1rem;
        border-bottom: 2px solid #D41e83;
    `}
`;
class PricePage extends React.Component{
    render(){
        return(
            <StyledContainer>
                <Card>
                    <StyledWrapper>
                        <span className='descr'>Pedicure kosmetyczny</span>
                        <span className='price'>120 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Pedicure kosmetyczny z lakierem</span>
                        <span className='price'>140 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Pedicure kosmetyczny z hybrydą</span>
                        <span className='price'>150 zł</span>
                    </StyledWrapper>
                    <StyledWrapper break>
                        <span className='descr'>Hybryda bez opracowania podeszwy stóp</span>
                        <span className='price'>80 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Pedicure medyczny</span>
                        <span className='price'>150 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Pedicure medyczny z hybrydą</span>
                        <span className='price'>180 zł</span>
                    </StyledWrapper>
                    <StyledWrapper break>
                        <span className='descr'>Pedicure medyczny rozszerzony</span>
                        <span className='price'>190 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Usunięcie jednego modzela, odcisku</span>
                        <span className='price'>50 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Oprocowanie przerośnietych lub zmienionych chorobowo paznokci</span>
                        <span className='price'>120 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Oprocowanie jendego paznokcia zmienionego chorobowo</span>
                        <span className='price'>50-80 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Podcięcie wyrastającego paznokcia</span>
                        <span className='price'>70 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Opracowanie pękających pięt</span>
                        <span className='price'>120 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Klamra tytanowa</span>
                        <span className='price'>160 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Założenie tamponady</span>
                        <span className='price'>30 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Ewakuacja krwiaka podpaznokciowego</span>
                        <span className='price'>80 zł</span>
                    </StyledWrapper>
                    <StyledWrapper>
                        <span className='descr'>Rekonstrukcja paznokcia</span>
                        <span className='price'>100 zł</span>
                    </StyledWrapper>
                </Card>
                <Container
                    title={"Przed wizytą w gabinecie przygotuj się!"}
                    img={bath}
                    link={"https://www.freepik.com/vectors/people"}
                    description={"People vector created by pch.vector - www.freepik.com"}
                >
                    <b>STOPY</b><br></br>
Przed wizytą dla komfortu obu stron zaleca się odświeżenie stóp oraz niestosowanie
żadnych preparatów, które mogłyby utrudnić diagnostykę.
<br></br><br></br><b>PAZNOKCIE</b><br></br>
Paznokcie powinny być niepomalowane lakierem. Lakier warto usunąć przynajmniej jedną
dobę przed wizytą.
                </Container>
            </StyledContainer>
        );
    }
}

export default PricePage;